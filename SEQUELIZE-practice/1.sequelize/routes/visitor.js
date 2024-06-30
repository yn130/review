const express = require('express');
const controller = require('../controller/CVisitor');
const router = express.Router();


// POST /visitor 
router.post('/', controller.postVisitor); // 하나 추가

// DELETE /visitor
router.delete('/', controller.deleteVisitor); // 하나 삭제

// GET /visitor/:id
router.get('/:id', controller.getVisitor); // 하나 조회

// PATCH /visitor
router.patch('/', controller.patchVisitor); // 하나 수정

module.exports = router;
