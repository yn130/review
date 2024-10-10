const { User, Fridge, FridgeSection, StorageType, UserFridgeMapping, FridgeTypeSection } = require('../../models/Index');
const { hashPassword, comparePassword } = require('../../utils/encrypt');
const { generateTokens, verifyAccessToken, refreshAccessToken, logout } = require('../../middlewares/auth');
require('dotenv').config();


exports.signUp = (req, res) => {
    res.render('signup');
};

// exports.logIn = (req, res) => {
//     res.render('login');
// };

exports.logIn = (req, res) => {
    res.render('login', {
        kakaoKey: process.env.KAKAO_JAVASCRIPT_KEY
    });
};

// 회원가입
exports.register = async (req, res) => {
    try {
        const { userId, userName, userEmail, userPassword } = req.body;

        // 비밀번호 유효성 검사
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
        if (!passwordRegex.test(userPassword)) {
            return res.status(400).json({ message: '유효성 검사 실패', errors: ['비밀번호는 최소 6자, 영문자와 숫자를 포함해야 합니다.'] });
        }

        // 비밀번호 해시화
        const hashedPassword = await hashPassword(userPassword);

        // 새로운 유저 생성
        const newUser = await User.create({
            userId,
            userName,
            userEmail,
            userPassword: hashedPassword
        });

        console.log('New User Created:', newUser);

        return res.status(201).json({ message: '회원가입 성공', newUser });
    } catch (error) {
        if (error.name === 'SequelizeValidationError') {
            const messages = error.errors.map(err => err.message);
            console.error('Validation Errors:', messages);
            return res.status(400).json({ message: '유효성 검사 실패', errors: messages });
        }

        // 이메일 또는 아이디 중복 오류 처리
        if (error.name === 'SequelizeUniqueConstraintError') {
            const messages = error.errors.map(err => err.message);
            console.error('중복 오류 발생:', messages);
            return res.status(400).json({ message: '중복 오류 발생', errors: messages });
        }

        console.error('회원가입 중 오류 발생:', error);
        return res.status(500).json({ message: '회원가입 실패', errors: [error.message] });
    }
};

// 로그인 및 사용자 관련 초기 데이터 설정
// 유저 인증 + 냉장고(fridge 테이블) 정보 설정 + 토큰 생성 및 저장 + Fridge + UserFridgeMapping + FridgeSection 데이터 생성 및 저장 + 
exports.postlogIn = async (req, res) => {
    try {
        const { userId, userPassword } = req.body;

        // 유저 조회
        const user = await User.findOne({ where: { userId } });
        if (!user) {
            return res.status(401).json({ message: '존재하지 않는 아이디입니다.' });
        }

        // 비밀번호 비교
        const isMatch = await comparePassword(userPassword, user.userPassword);
        if (!isMatch) {
            return res.status(401).json({ message: '비밀번호가 잘못되었습니다. 다시 입력해주세요' });
        }

        // 유저 정보를 req.user에 저장
        req.user = user;

        // 로컬스토리지에 저장한 정보 가져오기 (냉장고 타입, 재료 이름, 카테고리 번호)
        const selectedFridgeType = req.body.selectedFridgeType;

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
        const { accessToken, refreshToken } = generateTokens(user);

        // 리프레시 토큰을 쿠키에 저장
        res.cookie('refreshToken', refreshToken, {
            httpOnly: true,
            secure: true,
            sameSite: 'Strict',
        });

        // fridgeID와 Fridge가 제대로 로드되었는지 확인
        if (!userFridgeMapping || !userFridgeMapping.Fridge) {
            return res.status(500).json({ message: '사용자와 연관된 냉장고 정보를 불러오지 못했습니다.' });
        }

        // 이 부분에서 fridgeID를 직접 전달하는 방식 확인
        return res.status(200).json({
            message: '로그인 성공',
            accessToken,
            fridgeID: userFridgeMapping.fridgeID, 
            sections: userFridgeMapping.Fridge.FridgeSections,
        });
    } catch (error) {
        console.error('로그인 중 오류 발생:', error);
        return res.status(500).json({ message: '로그인 실패' });
    }
};

// 임시데이터 DB 저장
exports.saveTempData = async (req, res) => {
    try {
        // const { selectedSectionID } = req.body;
        const userId = req.user.id;

        if (!userId) {
            return res.status(401).json({ message: '유효하지 않은 사용자입니다. 로그인이 필요합니다.' });
        }

        const userFridgeMapping = await UserFridgeMapping.findOne({
            where: {
                ID: userId,
                inviteStatus: 'accepted',
                status: true
            },
            include: [{ model: Fridge }]
        });

        if (!userFridgeMapping) {
            return res.status(404).json({ message: '사용자에게 연결된 냉장고가 없습니다.' });
        }

        const fridgeID = userFridgeMapping.fridgeID;

        const fridgeSection = await FridgeSection.findOne({
            where: {
                fridgeID: fridgeID,
                // sectionID: selectedSectionID
            }
        });

        if (!fridgeSection) {
            return res.status(404).json({ message: '해당 섹션을 찾을 수 없습니다.' });
        }

        // 성공 메시지와 함께 섹션 정보를 클라이언트로 전달
        res.status(200).json({
            message: '섹션 정보가 성공적으로 저장되었습니다.',
            sections: await FridgeSection.findAll({
                where: { fridgeID: fridgeID },
                // order: [['sectionID', 'ASC']], // sectionID 오름차순으로 정렬
                // include: [StorageType],
                
            })
        });
        
    } catch (error) {
        console.error('임시 데이터 저장 중 오류 발생:', error);
        res.status(500).json({ message: '임시 데이터 저장 실패' });
    }
};


// 로그아웃
exports.logoutUser = (req, res) => {
    try {
        // 미들웨어에서 제공하는 logout 함수 호출
        logout(req, res);
        return res.status(200).json({ message: '로그아웃 성공' }); 
    } catch (error) {
        console.error('로그아웃 중 오류 발생:', error);
        return res.status(500).json({ message: '로그아웃 실패' });
    }
};


// 토큰 재발급
exports.refreshToken = async (req, res) => {
    try {
        // auth.js 의 refreshAccessToken 함수 호출
        await refreshAccessToken(req, res);
    } catch (error) {
        console.error('토큰 재발급 중 오류 발생:', error);
        return res.status(403).json({ message: '유효하지 않은 리프레시 토큰입니다.' }); // 403: Forbidden (인증은 되었으나, 해당 리소스에 대한 접근 권한이 없을 때 사용)
    }
};

// 보호된 라우트 접근 시 액세스 토큰 유효성 확인
// 사용자가 보호된 리소스(예: /profile, /settings 등)에 접근하려고 할 때, 해당 라우트에 대한 요청이 이 함수로 전달됨.
exports.protectedRoute = (req, res, next) => {
    try {
        // 미들웨어에서 제공하는 verifyAccessToken 함수 호출
        verifyAccessToken(req, res, next);
    } catch (error) {
        console.error('토큰 확인 중 오류 발생:', error);
        return res.status(403).json({ message: '유효하지 않은 토큰입니다.' }); // 403: Forbidden
    }
};






























// 중복검사 버튼 사용 시 필요한 코드 

// // 아이디 중복 확인
// exports.checkDuplicateId = async (req, res) => {
//     try {
//         const { userId } = req.body;
//         const user = await User.findOne({ where: { userId } });
//         if (user) {
//             return res.status(400).json({ message: '이미 사용 중인 아이디입니다.', available: false });
//         }
//         res.status(200).json({ message: '사용 가능한 아이디입니다.', available: true });
//     } catch (error) {
//         console.error('Error in checkDuplicateId:', error);
//         res.status(500).json({ message: error.message });
//     }
// };

// // 이메일 중복 확인
// exports.checkDuplicateEmail = async (req, res) => {
//     try {
//         const { userEmail } = req.body;
//         const user = await User.findOne({ where: { userEmail } });
//         if (user) {
//             return res.status(400).json({ message: '이미 사용 중인 이메일입니다.', available: false });
//         }
//         res.status(200).json({ message: '사용 가능한 이메일입니다.', available: true });
//     } catch (error) {
//         console.error('Error in checkDuplicateEmail:', error);
//         res.status(500).json({ message: error.message });
//     }
// };
