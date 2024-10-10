const axios = require('axios');
const { User, Fridge, FridgeSection, StorageType, UserFridgeMapping, FridgeTypeSection } = require('../../models/Index');
const { generateTokens } = require('../../middlewares/auth');
require('dotenv').config();

exports.kakaoLogin = async (req, res) => {
    try {
        const { accessToken } = req.body;

        if (!accessToken) {
            return res.status(400).json({ success: false, message: 'Access Token이 제공되지 않았습니다.' });
        }

        // 카카오 API를 사용하여 유저 정보 가져오기
        const kakaoUserInfo = await axios.get('https://kapi.kakao.com/v2/user/me', {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        });

        if (!kakaoUserInfo.data) {
            return res.status(500).json({ success: false, message: '카카오 유저 정보를 가져올 수 없습니다.' });
        }

        const kakaoID = kakaoUserInfo.data.id;
        const kakaoEmail = kakaoUserInfo.data.kakao_account.email;
        const kakaoNickName = kakaoUserInfo.data.properties.nickname;
        const kakaoPW = process.env.KAKAO_PW;
        console.log("kakaoPW >>>>", kakaoPW);
        

        // 유저가 이미 DB에 있는지 확인
        let user = await User.findOne({ where: { userEmail: kakaoEmail } });

        if (!user) {
            // 유저가 없다면 새로 생성
            user = await User.create({
                userId: `kakao_${kakaoID}`,
                userName: kakaoNickName,
                userEmail: kakaoEmail,
                userPassword: kakaoPW // 임시 비밀번호 설정
            });
        }

        // 로컬스토리지에 저장한 냉장고 타입 정보 가져오기 (냉장고 타입, 재료 이름, 카테고리 번호)
        const selectedFridgeType = req.body.selectedFridgeType;
        console.log('카카오로그인에서 확인하는 selectedFridgeType >>>>>>>>', req.body.selectedFridgeType);

        // 유저의 냉장고 정보 로드
        let userFridgeMapping = await UserFridgeMapping.findOne({
            where: { ID: user.ID },
            include: [
                {
                    model: Fridge,
                    include: [
                        {
                            model: FridgeSection,
                            include: [StorageType] // 섹션 정보와 보관 위치 정보 포함
                        }
                    ]
                }
            ]
        });

        if (!userFridgeMapping) {
            // 유저의 냉장고가 없으면 새로운 냉장고 생성
            const fridge = await Fridge.create({
                fridgeTypeID: selectedFridgeType,
                fridgeName: "My Fridge",
                status: true
            });

            userFridgeMapping = await UserFridgeMapping.create({
                ID: user.ID,
                fridgeID: fridge.fridgeID,
                inviteStatus: 'accepted',
                status: true
            });

            // 냉장고 타입별 섹션 정보 로드(조회)
            const fridgeTypeSections = await FridgeTypeSection.findAll({
                where: { fridgeTypeID: selectedFridgeType }
            });

            // 조회된 섹션 정보 fridgeSection 테이블에 저장
            for (const typeSection of fridgeTypeSections) {
                await FridgeSection.create({
                    fridgeID: fridge.fridgeID,
                    storageTypeID: typeSection.storageTypeID,
                    sectionName: typeSection.sectionName,
                    positionOrder: typeSection.positionOrder,
                    status: true
                });
            }

            // 새로 생성된 냉장고와 섹션 정보를 다시 로드
            userFridgeMapping = await UserFridgeMapping.findOne({
                where: { ID: user.ID },
                include: [
                    {
                        model: Fridge,
                        include: [
                            {
                                model: FridgeSection,
                                include: [StorageType] // 섹션 정보와 보관 위치 정보 포함
                            }
                        ]
                    }
                ]
            });
        }

        // 토큰 생성
        const tokens = generateTokens(user);

        // 리프레시 토큰을 쿠키에 저장
        res.cookie('refreshToken', tokens.refreshToken, {
            httpOnly: true,
            secure: true,
            sameSite: 'Strict',
        });

        // fridgeID와 Fridge가 제대로 로드되었는지 확인
        if (!userFridgeMapping || !userFridgeMapping.Fridge) {
            return res.status(500).json({ message: '사용자와 연관된 냉장고 정보를 불러오지 못했습니다.' });
        }

        // 로그인 성공 응답
        res.status(200).json({
            success: true,
            message: '로그인 성공',
            accessToken: tokens.accessToken,
            fridgeID: userFridgeMapping.fridgeID,
            sections: userFridgeMapping.Fridge.FridgeSections
        });

    } catch (error) {
        console.error('Kakao login failed:', error);
        return res.status(500).json({ success: false, message: '카카오 로그인 중 서버 오류가 발생했습니다.', error: error.message });
    }
};
