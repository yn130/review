const express = require('express');
const router = express.Router();
const recipeController = require('../../controller/recipe/CrecipeController');
const { verifyAccessToken }  = require('../../middlewares/auth');



router.get('/', recipeController.main);

// 레시피 추천 요청 라우트
router.get('/recommendations', verifyAccessToken, recipeController.recommendRecipes);
router.get('/search', verifyAccessToken, recipeController.searchRecipes);

// 레시피 상세 정보와 유튜브 영상 링크 제공
router.get('/:recipeID', recipeController.getRecipeDetails);

module.exports = router;