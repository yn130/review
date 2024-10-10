const express = require('express');
const controller = require('../../controller/search/CsearchInFridge');
const router = express.Router();

// 검색 페이지 라우트
router.get('/', controller.search);

// 검색 요청 라우트
router.get('/results', controller.searchIngredients);

module.exports = router;