const { FridgeType, Fridge, Ingredient, FridgeItem, Category, FridgeSection } = require('../../models/Index');

exports.getIngredient = async (req, res) => {
    res.render('ingredientDetail')
}
// 냉장고 ID(fridgeID)에 따라 해당 냉장고의 섹션, 재료 카테고리, 보관 장소(스토리지 타입) 등의 데이터를 서버에서 조회하고,
// 해당 정보를 클라이언트에게 JSON 형식으로 응답을 보냄
exports.getDataIngredient = async (req, res) => {
    try {
        const { fridgeID, categoryID } = req.body; // POST 요청 바디에서 fridgeID와 categoryID 가져오기

        if (!fridgeID || !categoryID) {
            return res.status(400).json({ error: 'Fridge ID and Category ID are required' });
        }


        //카테고리(Category) 조회 

        const category = await Category.findOne({ where: { categoryID } });
        if (!category) {
            return res.status(404).json({ error: 'Category not found' });
        }


        const sections = await FridgeSection.findAll({
            where: { fridgeID },
            order: [['sectionID', 'ASC']],

        });

 
        // R유저별 섹션과 보관 장소에 맞게 반환
        res.json({
            categoryName: category.categoryName,          // 모든 카테고리 (필요시 유저별 필터링 가능)
            sections,                                    // 유저의 냉장고에 있는 섹션 정보
        });
    } catch (error) {
        console.error('Detailed Error:', error);
        res.status(500).json({ error: 'Failed to fetch data' });
    }
};

// 재료 저장 
exports.saveIngredient = async (req, res) => {
    try {
        const { fridgeID, sectionID, ingredientName, categoryID, quantity, registrationDate, expirationDate, memo } = req.body;

        // 필수 필드 검증
        if (!fridgeID || !sectionID || !ingredientName || !categoryID || !quantity) {
            return res.status(400).json({ message: '모든 필수 정보를 입력해주세요.' });
        }

        // 재료가 Ingredient 테이블에 이미 있는지 확인
        let ingredient = await Ingredient.findOne({
            where: { ingredientName, categoryID }  // 이름과 카테고리로 조회
        });

        // Ingredient 테이블에서 가져온 ingID를 사용하여 FridgeItem에 재료 추가
        const newFridgeItem = await FridgeItem.create({
            fridgeID,
            sectionID,
            ingredientID: ingredient.ingredientID,  // Ingredient 테이블의 ingID를 사용
            quantity,
            registrationDate,
            expirationDate,
            memo
        });

        // 성공 메시지 반환
        res.json({ message: '재료 추가 성공', ingredient: newFridgeItem });
    } catch (error) {
        console.error('Error adding ingredient:', error);
        res.status(500).json({ message: '재료 추가 실패' });
    }
};


// 재료 수정 
exports.editIngredientPage = async (req, res) => {
    try {
        const { fridgeItemID } = req.params;

        // fridgeItem 정보 가져오기 (FridgeSection, Fridge, FridgeType과 함께 가져오기)
        const fridgeItem = await FridgeItem.findOne({
            where: { fridgeItemID },
            include: [
                {
                    model: Ingredient,
                    attributes: ['ingredientName']
                },
                {
                    model: FridgeSection, // FridgeSection과 Fridge를 가져옴
                    attributes: ['sectionID', 'fridgeID'],
                    include: [
                        {
                            model: Fridge, // Fridge와 fridgeType을 함께 가져옴
                            attributes: ['fridgeTypeID'],
                            include: [
                                {
                                    model: FridgeType, // FridgeType을 가져옴
                                    attributes: ['fridgeTypeName']
                                }
                            ]
                        }
                    ]
                }
            ]
        });

        if (!fridgeItem) {
            return res.status(404).json({ error: '해당 재료를 찾을 수 없습니다.' });
        }

        // fridgeTypeName을 가져옴
        const fridgeType = fridgeItem.FridgeSection.Fridge.FridgeType.fridgeTypeName;

        // 섹션 정보 가져오기
        const sections = await FridgeSection.findAll({
            where: { fridgeID: fridgeItem.FridgeSection.fridgeID },
            attributes: ['sectionID', 'sectionName'],
            order: [['sectionID', 'ASC']],
        });

        // editIngredient.ejs 페이지로 fridgeItem과 sections, fridgeType 데이터 전달
        res.render('editIngredient', { fridgeItem, sections, fridgeType });
    } catch (error) {
        console.error('Error fetching ingredient details for editing:', error);
        res.status(500).json({ error: '재료 수정 페이지를 불러오는 중 문제가 발생했습니다.' });
    }
};


// 수정된 재료 저장
exports.updateIngredient = async (req, res) => {
    try {
        const { fridgeItemID } = req.params; // URL에서 fridgeItemID 가져오기
        const { sectionID, quantity, expirationDate, registrationDate, memo } = req.body; // 수정할 데이터 가져오기

        // fridgeItemID로 해당 재료 정보 조회
        const fridgeItem = await FridgeItem.findOne({ where: { fridgeItemID } });

        if (!fridgeItem) {
            return res.status(404).json({ error: '해당 재료를 찾을 수 없습니다.' });
        }

        // 재료 정보 업데이트
        fridgeItem.sectionID = sectionID;  // 섹션ID 업데이트
        fridgeItem.quantity = quantity;  // 수량 업데이트
        fridgeItem.expirationDate = expirationDate;  // 유통기한 업데이트
        fridgeItem.registrationDate = registrationDate;  // 구매일 업데이트
        fridgeItem.memo = memo;  // 메모 업데이트
        await fridgeItem.save(); // 업데이트 저장

        res.status(200).json({ message: '재료 정보가 성공적으로 수정되었습니다.' });
    } catch (error) {
        console.error('Error updating ingredient:', error);
        res.status(500).json({ error: '재료 정보 수정 중 오류가 발생했습니다.' });
    }
};


// 재료 삭제 
exports.deleteIngredient = async (req, res) => {
    try {
        const { fridgeItemID } = req.params; // URL 파라미터에서 fridgeItemID 가져오기

        // fridgeItemID와 userId로 해당 재료 찾기
        const fridgeItem = await FridgeItem.findOne({
            where: {
                fridgeItemID: fridgeItemID,
            }
        });

        // 재료가 없는 경우 처리
        if (!fridgeItem) {
            return res.status(404).json({ message: '해당 재료를 찾을 수 없습니다.' });
        }

        // 재료 삭제
        await fridgeItem.destroy();

        return res.status(200).json({ message: '재료가 성공적으로 삭제되었습니다.' });
    } catch (error) {
        console.error('재료 삭제 중 오류 발생:', error);
        return res.status(500).json({ message: '재료 삭제 실패' });
    }
};
