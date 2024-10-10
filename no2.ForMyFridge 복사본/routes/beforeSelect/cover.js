const express = require('express');
const controller = require('../../controller/beforeSelect/Ccover');
const router = express.Router();

router.get('/', controller.cover);


module.exports = router;