const express = require('express');
const controller = require('../../controller/fridge/Ccategory')
const { verifyAccessToken } = require('../../middlewares/auth');
const router = express.Router();


router.get('/', controller.main);
router.get('/select-category', controller.getAllCategories);
router.get('/select-category/:categoryID', controller.getIngredientsByCategory);

router.get('/search-ingredient', controller.searchIngredient);


// 인증된 사용자만 접근 가능하도록 미들웨어 추가
router.get('/categoriesPlus', verifyAccessToken, controller.categoriesPlus);
router.post('/categoriesPlus/add', verifyAccessToken, controller.addCategory);

router.get('/ingredientsPlus', verifyAccessToken, controller.ingredientsPlus);
router.post('/ingredientsPlus/add', verifyAccessToken, controller.addIngredient);

module.exports = router;