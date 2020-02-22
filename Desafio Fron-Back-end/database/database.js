const Sequelize = require("sequelize");
const connection= new Sequelize('PostdataBase','root','starcraft',{
  host:'localhost',
  dialect: 'mysql'
});

module.exports = connection;
