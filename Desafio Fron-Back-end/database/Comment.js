const Sequelize = require("sequelize");
const connection = require("./database");
const Comment= connection.define("comment",{
  corpo:{
    type: Sequelize.TEXT,
    allowNull:false,

  },
  perguntaId: {
    type: Sequelize.INTEGER,
    allowNull: false
  }


});
Resposta.sync({force: false});
module.exports= Comment;
