const { FridgeTypeSection, UserFridgeMapping, Fridge, FridgeSection, FridgeItem, Ingredient } = require('../../models/Index');  // 필요한 모델들 추가


// 로그인한 유저의 냉장고 섹션과 저장된 재료 정보 가져오기
// exports.getFridgeDetails = async (req, res) => {
//     try {
//         const userId = req.user.id;  // JWT에서 추출한 userID
//         console.log('JWT에서 추출한 userID: ', req.user.id); 

        
//         // 유저의 냉장고 매핑 정보 가져오기
//         const userFridge = await UserFridgeMapping.findOne({
//             where: { ID: userId },  // 수정된 부분: userID 대신 ID 사용
//             include: [
//                 {
//                     model: Fridge,
//                     // attributes: ['fridgeTypeID','fridgeName'],  // 필요한 필드만 가져옴
//                     attributes: ['fridgeName'],  // 필요한 필드만 가져옴
//                     include: [
//                         {
//                             model: FridgeSection,
//                             attributes: ['sectionName'],  // 섹션 이름만 가져옴
//                             include: [
//                                 {
//                                     model: FridgeItem,
//                                     attributes: ['fridgeItemID','sectionID','registrationDate', 'quantity', 'expirationDate'],  // 필요한 필드만 가져옴
//                                     include: [
//                                         {
//                                             model: Ingredient,
//                                             attributes: ['ingredientName'],  // 재료 이름만 가져옴
//                                         }
//                                     ]
//                                 }
//                             ]
//                         }
//                     ]
//                 }
//             ]
//         });
        
//         console.log(JSON.stringify(userFridge, null, 2));  // 데이터 구조를 확인하기 위해 JSON 출력

//         if (!userFridge) {
//             return res.status(404).json({ error: '냉장고 정보가 없습니다.' });
//         }

//         // 냉장고 섹션 정보와 각 섹션에 저장된 재료들 반환
//         res.json({
//             // fridgeTypeID:userFridge.Fridge.fridgeTypeID,
//             fridgeName: userFridge.Fridge.fridgeName,
//             sections: userFridge.Fridge.FridgeSections.map(section => ({
//                 sectionName: section.sectionName,
//                 FridgeItems: section.FridgeItems.map(item => ({
//                     sectionID: item.sectionID,
//                     fridgeItemID: item.fridgeItemID,
//                     ingredientName: item.Ingredient.ingredientName,  // ingredientName 가져옴
//                     quantity: item.quantity,
//                     expirationDate: item.expirationDate,
//                     registrationDate: item.registrationDate,
//                 }))
//             }))
//         });

//     } catch (error) {
//         console.error('Error fetching fridge details:', error);
//         res.status(500).json({ error: '냉장고 정보를 불러오는 중 문제가 발생했습니다.' });
//     }
// };


exports.getFridgeDetails = async (req, res) => {
    try {
        const userId = req.user.id;  // JWT에서 추출한 userID
        const fridgeTypeID = req.query.fridgeTypeID; // 클라이언트에서 fridgeTypeID를 쿼리로 전달받음
        
        // 유저의 냉장고 매핑 정보 가져오기 (냉장고 타입별로 필터링)
        const userFridge = await UserFridgeMapping.findOne({
            where: { ID: userId },  
            include: [
                {
                    model: Fridge,
                    where: { fridgeTypeID },  // 선택한 냉장고 타입으로 필터링
                    attributes: ['fridgeName'],
                    include: [
                        {
                            model: FridgeSection,
                            attributes: ['sectionName'],
                            include: [
                                {
                                    model: FridgeItem,
                                    attributes: ['fridgeItemID', 'sectionID', 'quantity', 'expirationDate', 'registrationDate'],
                                    include: [
                                        {
                                            model: Ingredient,
                                            attributes: ['ingredientName'],
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        });

        if (!userFridge) {
            return res.status(404).json({ error: '냉장고 정보가 없습니다.' });
        }

        res.json({
            fridgeName: userFridge.Fridge.fridgeName,
            sections: userFridge.Fridge.FridgeSections.map(section => ({
                sectionName: section.sectionName,
                FridgeItems: section.FridgeItems.map(item => ({
                    sectionID: item.sectionID,
                    fridgeItemID: item.fridgeItemID,
                    ingredientName: item.Ingredient.ingredientName,
                    quantity: item.quantity,
                    expirationDate: item.expirationDate,
                    registrationDate: item.registrationDate,
                }))
            }))
        });

    } catch (error) {
        console.error('Error fetching fridge details:', error);
        res.status(500).json({ error: '냉장고 정보를 불러오는 중 문제가 발생했습니다.' });
    }
};

// 특정 냉장고 타입의 섹션 정보 가져오기
exports.getSection = async (req, res) => {
    try {
        const { fridgeTypeID } = req.params;

        // 해당 냉장고 타입의 섹션 정보 가져오기
        const sections = await FridgeTypeSection.findAll({
            where: { fridgeTypeID }
        });

        // sections 배열만 반환
        res.json(sections);
    } catch (error) {
        console.error('Error fetching sections:', error);
        res.status(500).json({ error: 'Failed to fetch sections' });
    }
};

// 각 페이지 랜더링 
exports.fourDoors = (req, res) => {
    res.render('fourDoors')
    // res.render('fourDoors(ye수정중)');
};

exports.doubleDoors = (req, res) => {
    res.render('doubleDoors');
};

exports.nomalType = (req, res) => {
    res.render('nomalType');
};

exports.kimchiType = (req, res) => {
    res.render('kimchiType');
};


// 냉장고 추가 api 
exports.addFridge = async (req, res) => {
    try {
        const userID = req.user.id; // 로그인한 유저의 ID
        const { fridgeTypeID, fridgeName } = req.body; // 클라이언트에서 선택한 냉장고 타입 및 이름
        
        // 새로운 냉장고 생성
        const fridge = await Fridge.create({
            fridgeTypeID: fridgeTypeID, // 선택한 타입으로 냉장고 생성
            fridgeName: fridgeName || "My New Fridge", // 냉장고 이름 설정, 기본값 제공
            status: true
        });

        // UserFridgeMapping에 유저와 새 냉장고를 연결
        await UserFridgeMapping.create({
            ID: userID,
            fridgeID: fridge.fridgeID,
            inviteStatus: 'accepted', // 유저가 소유한 냉장고는 기본적으로 accepted
            status: true
        });

        // 냉장고 타입별 섹션 정보 가져오기
        const fridgeTypeSections = await FridgeTypeSection.findAll({
            where: { fridgeTypeID }
        });

        // 해당 냉장고의 섹션 저장
        for (const typeSection of fridgeTypeSections) {
            await FridgeSection.create({
                fridgeID: fridge.fridgeID,
                storageTypeID: typeSection.storageTypeID,
                sectionName: typeSection.sectionName,
                positionOrder: typeSection.positionOrder,
                status: true
            });
        }

        res.status(200).json({ message: '새로운 냉장고가 성공적으로 추가되었습니다.', fridgeID: fridge.fridgeID });
    } catch (error) {
        console.error('냉장고 추가 중 오류 발생:', error);
        res.status(500).json({ message: '냉장고 추가 실패' });
    }
};
