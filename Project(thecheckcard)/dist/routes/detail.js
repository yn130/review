"use strict";

var express = require('express');
var router = express.Router();
var detailController = require('../controller/Cdetail');

// authenticateToken 미들웨어로 사용!
var _require = require('../middleware/token'),
  authenticateToken = _require.authenticateToken; // 변경된 부분

// 카드 상세 페이지 라우트
router.get('/:cardId', authenticateToken, detailController.showCardDetails);

// 카드 좋아요 라우트
router.post('/like', authenticateToken, detailController.toggleLike);
module.exports = router;