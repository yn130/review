"use strict";

var express = require('express');
var controller = require('../controller/CSearch');
var router = express.Router();
router.get('/', controller.getCardDetails);
module.exports = router;