const Sequelize = require("sequelize");
const connection = require("./database");
const Comment= connection.define("comment",{
  body:{
    type: Sequelize.TEXT,
    allowNull:false,

  },
  postId: {
    type: Sequelize.INTEGER,
    allowNull: false
  }

});
Comment.sync({force: false});
module.exports= Comment;
