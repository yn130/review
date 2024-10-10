const express = require('express');
const router = express.Router();
const controller = require('../../controller/fridge/Cingredient');
const { verifyAccessToken } = require('../../middlewares/auth');


router.get('/detail',verifyAccessToken, controller.getIngredient);
// 페이지에 로드될 정보 요청  
router.post('/detail', controller.getDataIngredient);


// 재료 추가 라우트
router.post('/save', verifyAccessToken, controller.saveIngredient);


// 재료 수정 페이지 랜더링 
// router.get('/edit', controller.editIngredient);
router.get('/edit/:fridgeItemID', verifyAccessToken, controller.editIngredientPage);

// 재료 수정 데이터를 처리하는 라우트
router.post('/edit/:fridgeItemID', verifyAccessToken, controller.updateIngredient);

// 재료 삭제 
router.delete('/delete/:fridgeItemID', verifyAccessToken, controller.deleteIngredient);

module.exports = router;
