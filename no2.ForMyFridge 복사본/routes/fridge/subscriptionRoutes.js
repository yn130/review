// 사용자가 푸시 알림을 구독할 때 서버에 구독 정보를 저장하는 라우트
const express = require('express');
const { subscribeUser } = require('../../controller/fridge/CsubscriptionController');
const { verifyAccessToken } = require('../../middlewares/auth');  // JWT 토큰 검증을 위한 미들웨어
const router = express.Router();

// 구독 처리 라우트
router.post('/', verifyAccessToken, subscribeUser);

module.exports = router;
