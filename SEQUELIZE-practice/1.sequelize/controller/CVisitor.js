const { Visitor } = require('../models/index');

// 하나 추가 
exports.postVisitor = async (req, res) => {
    try { 
      const {id, name, comment} = req.body;
      const newVisitor = await Visitor.create({
        id, name, comment
      });
      res.send({
        id: newVisitor.id,
        name: name,
        comment: comment
      });
    } catch (err) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  };
  
  
   // 하나 삭제
exports.deleteVisitor = async (req, res) => {
  try {
  console.log(req.body);
    const {id, name, comment} = req.body;
    const isDeleted = await Visitor.destroy({
        where: { id }
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


  // 하나 조회
exports.getVisitor = (req, res) => {
  Visitor.getVisitor(req.params.id, (result) => {
    res.send(result);
  }); 
};

exports.getVisitor = async (req, res) => {
  try { 
      const { id } = req.params;
      // select * from player where player_id = 1
      const visitor = await Visitor.findOne({
          where: { id }
      });
      res.send(visitor);
  } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
  }
}
  
//하나 수정
exports.patchVisitor= async (req, res) => {
  try {
      const { id, name, comment } = req.body;
      const updatedVisitor = await Visitor.update(
          { name, comment }, 
          { where: { id }} 
      );
      res.send({ updatedVisitor }); 

  } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
  }
};

  