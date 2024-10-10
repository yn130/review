const express = require('express');
const router = express.Router();
const { refreshAccessToken } = require('../middlewares/auth'); // auth.js 파일에서 가져옴

// /refresh 경로에 대한 API
router.post('/refresh', refreshAccessToken);

module.exports = router;