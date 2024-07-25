"use strict";

var express = require('express');
var controller = require('../controller/Cindex');
var router = express.Router();
router.get('/', controller.main);
// 이거 삭제!! 카테고리 페이지 보여줘야함! 
// router.get('/commend', controller.renderCommend);

module.exports = router;