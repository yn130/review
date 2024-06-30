const express = require('express');
const controller = require('../controller/CVisitors');
const router = express.Router();

// GET /visitors => localhost:PORT/visitors
router.get('/', controller.getVisitors); // 전체 조회

module.exports = router;

