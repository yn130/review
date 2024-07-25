"use strict";

var express = require('express');
var controller = require('../controller/CProfile');
var router = express.Router();
var _require = require('../middleware/token'),
  authenticateToken = _require.authenticateToken; // 변경된 부분: 중괄호 추가

router.get('/', authenticateToken, controller.getProfile);
router.patch('/edit', authenticateToken, controller.patchProfile);
router["delete"]('/delete', authenticateToken, controller.deleteProfile);
router["delete"]('/comments/:commentId', authenticateToken, controller.deleteComment);
router["delete"]('/cards/unlike/:cardId', authenticateToken, controller.unlikeCard);
module.exports = router;