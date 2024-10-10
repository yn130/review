const express = require('express');
const router = express.Router();
const controller = require('../../controller/user/Cuser');
const { verifyAccessToken, logout } = require('../../middlewares/auth');



// 카카오 로그인 api 
const Cauth = require('../../controller/user/Cauth');
router.post('/auth/kakao', Cauth.kakaoLogin);


// 회원가입 페이지 렌더링
router.get('/signup', controller.signUp);

// 로그인 페이지 렌더링
router.get('/login', controller.logIn);

// 회원가입 요청 처리
router.post('/register', controller.register);

// 임시 데이터 저장
router.post('/save-temp-data', verifyAccessToken, controller.saveTempData);

// 로그인 요청 처리
router.post('/login', controller.postlogIn);

// 로그아웃 요청 처리
router.post('/logout', logout, controller.logoutUser);

// 토큰 재발급 요청 처리
router.post('/refreshToken', controller.refreshToken);

// // 보호된 라우트 예시: 유저 프로필 조회 (로그인된 사용자만 접근 가능)
// router.get('/profile', verifyAccessToken, (req, res) => {
//     res.json({ message: '프로필 페이지', user: req.user });
// });

// // 보호된 라우트 예시: 유저 설정 변경 (로그인된 사용자만 접근 가능)
// router.post('/settings', verifyAccessToken, (req, res) => {
//     // 설정 변경 로직 구현
//     res.json({ message: '설정이 성공적으로 업데이트되었습니다.' });
// });

// // 아이디 중복 확인 요청 처리
// router.post('/checkDuplicateId', userController.checkDuplicateId);

// // 이메일 중복 확인 요청 처리
// router.post('/checkDuplicateEmail', userController.checkDuplicateEmail);

module.exports = router;
