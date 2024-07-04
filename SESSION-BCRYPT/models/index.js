
const Sequelize = require('sequelize');
const config= require(__dirname + '/../config/config.js')['development']
const db = {}; // 빈 객체 

const sequelize = new Sequelize(
  config.database, 
  config.username, 
  config.password, 
  config
);

const UserModel = require('./user')(sequelize, Sequelize); 

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.User = UserModel;

module.exports = db;