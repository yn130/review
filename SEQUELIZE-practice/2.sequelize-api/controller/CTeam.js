const { Team, Player, Profile } = require('../models/index');
const { Op } = require('sequelize');

// exports.getTeams = async (req, res) => {
//     try {
//         let teams;
//         teams = await Team.findAll({
//             attributes: ['team_id', 'name'],
//         });

//         res.json(teams);

//     } catch (error) {
//         console.error(error);
//         res.status(500).send('Internal Server Error');
//     }
// }
exports.getTeams = async (req, res) => {
    try {
        const { sort, search } = req.query; 
        console.log(req.query); // { sort: 'name_asc' }, { search: 'KT' }

        let teams;

        if (sort === 'name_asc') {
            // 이름 기준 오름차순 
            // SELECT `team_id`, `name` FROM `Team` AS `Team` ORDER BY `Team`.`name` ASC;
            teams = await Team.findAll({
                attributes: ['team_id', 'name'],
                order: [['name', 'ASC']]
            });
        } else if (search) {
            // SELECT `team_id`, `name` FROM `Team` AS `Team` WHERE `Team`.`name` LIKE '%KT%';
            teams = await Team.findAll({
                attributes: ['team_id', 'name'],
                where: {
                    name: { [Op.like]: `%${search}%`}
                }
            })
        } else {
            // 전체 조회 
            // SELECT `team_id`, `name` FROM `Team` AS `Team`;
            teams = await Team.findAll({
                attributes: ['team_id', 'name'],
            });
        }

        res.json(teams);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};

exports.getTeam = async (req, res) => {
    try {
        const { team_id } = req.params;
        const team = await Team.findAll({
            where: {team_id}
        });
        res.json(team);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};

exports.getTeamPlayers = async (req, res) => {
        try {
            const { team_id } = req.params;
            const team = await Team.findOne({
                where: {team_id},
                include: [{ model:Player }]
            });
            res.json(team);
        } catch (error) {
            console.error(error);
            res.status(500).send('Internal Server Error');
        } 
};

// 팀 추가
exports.postTeam = async (req, res) => {
    try {
        console.log(req.body)
        const { name } = req.body;
        const newteam = await Team.create({ name });
        res.json(newteam);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    } 
};

// 팀 삭제 
exports.deleteteam = async (req, res) => {
    try {
        const { team_id } = req.params;
        const isDeleted = await Team.destroy({
            where: { team_id }
        });
        console.log(isDeleted); 

        if (isDeleted) {
            return res.send(true);
        } else {
            return res.send(false);
        }
    }  catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};

// 월급1등
exports.getTop1Player = async (req, res) => {
    try {
        const { team_id } = req.params;
        
        const player = await Player.findOne({
            where: { team_id },
            attributes: ['player_id', 'name'],
            include: [{
                model: Profile,
                attributes: ['salary'],
                required: true
            }],
            order: [[Profile, 'salary', 'DESC']]
        });

        console.log(player); // 응답 데이터를 로그로 출력
        res.json(player);

    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};