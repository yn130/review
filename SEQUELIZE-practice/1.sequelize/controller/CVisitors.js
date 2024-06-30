const { Visitor } = require('../models/index');

// 전체 조회
exports.getVisitors = async (req, res) => {
  try { 
    const visitors = await Visitor.findAll();
    res.render('visitor', { data: visitors });
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
}; 
