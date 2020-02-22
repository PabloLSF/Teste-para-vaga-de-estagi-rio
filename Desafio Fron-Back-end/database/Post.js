const Sequelize = require("sequelize");
const connection = require("./database");
const Post = connection.define('post',{
  title:{
    type: Sequelize.STRING,
    allowNull: false
  },
  desc:{
    type: Sequelize.TEXT,
    allowNull: false
  }
});

Post.sync({force:false}).then(()=>{});
 module.exports = Post;
