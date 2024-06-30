const Sequelize = require('sequelize'); 
const config = require(__dirname + '/../config/config.json')["development"]; 
const db = {};  

const sequelize = new Sequelize(
  config.database, 
  config.username, 
  config.password, 
  config
); 

const VisitorModel = require('./visitor')(sequelize, Sequelize); 

db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.Visitor = VisitorModel;

module.exports = db;