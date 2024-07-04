// user.js
const express = require('express');
const controller = require('../controller/Cuser');
const router = express.Router();

// 메인페이지 
router.get('/', controller.main);
// 로그인 페이지 
router.get('/signin', controller.signin);
// 로그인 회원 조회
router.post('/signin', controller.aboutRoginInfo);
// 로그아웃
router.get('/logout', controller.logout);

module.exports = router;
