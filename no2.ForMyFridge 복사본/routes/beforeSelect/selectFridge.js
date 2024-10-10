const express = require('express');
const controller = require('../../controller/beforeSelect/CselectFridge');
const router = express.Router();

// selectFridge 렌더링 
router.get('/', controller.selectFridge);

// selectFridge 정보 저장 및 페이지 리다이렉트 
router.post('/', controller.selectFridgeType);


module.exports = router;