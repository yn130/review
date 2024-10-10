// 알림을 전송하거나 스케줄러에서 실행하는 작업을 위한 라우트
const express = require('express');
const { checkExpirationDates } = require('../../controller/fridge/CnotificationController');
const { verifyAccessToken } = require('../../middlewares/auth'); 
const router = express.Router();

// 알림 트리거
router.get('/send-expiration-notification/:userID', verifyAccessToken, checkExpirationDates);

module.exports = router;
