// user.js
const express = require('express');
const controller = require('../controller/Cuser');
const router = express.Router();


// 유저 조회
router.get('/user', controller.userList);




// 메인페이지 
router.get('/', controller.main);

// 로그인 페이지 
router.get('/signin', controller.signin);
// 로그인 회원 조회
router.post('/signin', controller.aboutRoginInfo);
// 로그아웃
router.get('/logout', controller.logout);

// 회원가입
router.get('/signup', controller.signup);
// 새로운 회원 생성
router.post('/signup', controller.signupDone);

// 로그인 성공 시 회원 정보 수정 페이지
router.get('/profile', controller.profile);
// 회원정보 수정
router.patch('/profile/edit', controller.editProfile);
// // 회원 삭제 
router.delete('/profile/delete', controller.deleteProfile);



module.exports = router;
