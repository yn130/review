const express = require('express');
const router = express.Router();
const controller = require('../controller/CGame')

router.get('/', controller.getTeamsPlayingInSeoul);
router.patch('/:location/date', controller.patchgame);


module.exports = router;