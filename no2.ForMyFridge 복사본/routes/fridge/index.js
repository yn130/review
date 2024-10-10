const express = require('express');
const controller = require('../../controller/fridge/Cindex');
const { verifyAccessToken } = require('../../middlewares/auth');  // JWT 토큰 검증을 위한 미들웨어
const router = express.Router();

// 유저가 로그인한 경우 해당 유저의 냉장고 섹션과 재료 정보를 제공하는 API
router.get('/getFridgeDetails', verifyAccessToken, controller.getFridgeDetails);  // 토큰 검증 미들웨어 추가

// 섹션 정보를 클라이언트에 제공하는 API
router.get('/getSection/:fridgeTypeID', controller.getSection);

// 유저가 로그인하지 않았더라도 접근 가능한 경로
router.get('/fourDoors', controller.fourDoors);
router.get('/doubleDoors', controller.doubleDoors);
router.get('/nomalType', controller.nomalType);
router.get('/kimchiType', controller.kimchiType);


router.post('/add', verifyAccessToken, controller.addFridge);


module.exports = router;