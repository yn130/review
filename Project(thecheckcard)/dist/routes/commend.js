"use strict";

var express = require('express');
var controller = require('../controller/CCommend');
var router = express.Router();
router.get('/', controller.showTop3Cards);
module.exports = router;