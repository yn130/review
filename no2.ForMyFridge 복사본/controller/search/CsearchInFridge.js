const { FridgeItem, Ingredient, Fridge, FridgeSection } = require('../../models/Index');
const { Op } = require('sequelize');

// 검색 페이지 렌더링
exports.search = (req, res) => {
    res.render('searchInFridge');
};


// 검색어 처리 함수
function searchWordFunc(searchTerm) {
    const step1 = searchTerm.trim().replace(/\s+/g, ' ');
    const step2 = step1.split(' ');
    const result = '%' + step2.join('%') + '%';
    return result;
}

exports.searchIngredients = async (req, res) => {
    let reqPage = parseInt(req.query.nowPage) || 0; // 페이지 번호 처리
    console.time('searchIngredients'); // 성능 측정을 위한 타이머

    try {
        // 쿼리 파라미터로 검색어를 받음
        const searchTerm = req.query.q;
        if (!searchTerm || searchTerm.trim() === '') { // 빈 문자열이면 에러 처리
            console.timeEnd('searchIngredients');
            return res.status(400).json({ error: '검색어가 누락되었습니다.' });
        }

        let searchWordMF = searchWordFunc(searchTerm); // 검색어 변환

        // DB에서 재료 목록을 확인
        let fridgeItems = await FridgeItem.findAll({
            where: {
                [Op.or]: [
                    { '$Ingredient.ingredientName$': { [Op.like]: searchWordMF } }, // 재료 이름에서 검색
                    { memo: { [Op.like]: searchWordMF } } // 메모에서 검색
                ]
            },
            limit: 10, // 페이지당 10개의 결과만 가져오기
            offset: reqPage * 10,
            include: [{ model: Ingredient }, { model: FridgeSection, include: [Fridge] }]
        });

        // 결과를 냉장고별, 섹션별로 그룹화
        const groupedResults = {};
        fridgeItems.forEach(item => {
            const fridgeName = item.FridgeSection.Fridge.fridgeName || 'Unnamed Fridge'; // 냉장고 이름
            const sectionName = item.FridgeSection.sectionName; // 섹션 이름

            if (!groupedResults[fridgeName]) {
                groupedResults[fridgeName] = {};
            }

            if (!groupedResults[fridgeName][sectionName]) {
                groupedResults[fridgeName][sectionName] = [];
            }

            groupedResults[fridgeName][sectionName].push({
                fridgeItemID: item.fridgeItemID,
                ingredientName: item.Ingredient.ingredientName,
                ingredientMemo: item.memo,
                quantity: item.quantity,
                expirationDate: item.expirationDate
            });
        });

        console.timeEnd('searchIngredients'); // 성능 측정 종 
        res.json(groupedResults); // 그룹화된 결과 반환
    } catch (err) {
        console.error(err);
        console.timeEnd('searchIngredients'); // 타이머 종료
        res.status(500).json({ error: '검색 중 문제가 발생했습니다.' });
    }
};