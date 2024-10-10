const { FridgeType } = require('../../models/Index');

// 냉장고 타입 가져오기 
exports.selectFridge = async (req, res) => {
    try {
        // FridgeType 테이블에서 모든 냉장고 타입 데이터를 가져옴
        const fridgeTypes = await FridgeType.findAll();
        
        // selectFridge.ejs 템플릿에 fridgeTypes 데이터를 전달하여 렌더링
        res.render('selectFridge', { fridgeTypes });
    } catch (error) {
        console.error('Error fetching fridge types:', error);
        res.status(500).send('Internal Server Error');
    }
};

// 냉장고 타입 선택 시 타이별 페이지로 리다이렉트 
exports.selectFridgeType = (req, res) => {
    const { fridgeTypeID } = req.body;

    // 서버 측에서 받은 fridgeTypeID에 따라 적절한 페이지로 리다이렉트 URL을 설정
    let redirectUrl = '';
    switch (fridgeTypeID) {
        case 1:
            redirectUrl = '/fridge/fourDoors';
            break;
        case 2:
            redirectUrl = '/fridge/doubleDoors';
            break;
        case 3:
            redirectUrl = '/fridge/nomalType';
            break;
        case 4:
            redirectUrl = '/fridge/kimchiType';
            break;
        default:
            return res.status(400).json({ success: false, message: 'Invalid fridge type' });
    }

    // 성공적으로 처리되었음을 응답
    res.json({ success: true, redirectUrl });
};