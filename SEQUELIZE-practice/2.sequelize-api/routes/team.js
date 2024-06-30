// 팀와 관련된 라우터를 정의하는 파일

// 기본 요청 경로 
//localhost:PORT/teams

const express = require('express');
const router = express.Router();
const controller = require('../controller/CTeam')

router.get('/', controller.getTeams);
router.get('/:team_id', controller.getTeam);
router.get('/:team_id/players', controller.getTeamPlayers);


router.post('/', controller.postTeam);
router.delete('/:team_id', controller.deleteteam);
router.get('/:team_id/top1player', controller.getTop1Player);


module.exports = router;