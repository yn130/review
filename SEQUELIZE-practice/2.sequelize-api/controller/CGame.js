const {Team, Game } = require('../models/index');
const { Op } = require('sequelize');

// 서울에서 경기하는 팀 조회 
exports.getTeamsPlayingInSeoul = async (req, res) => {
    try {
        const { search } = req.query; 
        const games = await Game.findAll({
            attributes: ['game_id', 'location'],
            where: {
                location: { [Op.like]: `%${search}%` }
            },
            include: [{
                model: Team,
                attributes: ['team_id', 'name'],
                through: { attributes: [] }
            }]
        });
        res.json(games);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    } 
};

//런던경기 날짜 변경
exports.patchgame = async (req, res) => {
    try {
        const { location } = req.params;
        const { date } = req.body;
        const updatedGame = await Game.update(
            { date }, 
            { where: { location }} 
        );

        res.json(updatedGame);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
}

