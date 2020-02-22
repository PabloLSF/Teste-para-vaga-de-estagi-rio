const express = require("express");
const app= express();
const bodyParser = require("body-parser");
const connection =require("./database/database");
const Post = require("./database/Post");
const Comment = require("./database/Comment");

connection
.authenticate()
.then(()=>{
  console.log("conexao realizaoda")
})
.catch((msgErro)=>{
  console.log(msgErro);
})

app.set('view engine','ejs');
app.use(express.static('public'));

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


app.get("/",(req,res)=>{
  Post.findAll({raw: true,order:[
    ['title','ASC']
  ]}).then(posts=>{
    res.render("index",{
      posts : posts
    });
  });
});

app.get("/posting",(req,res)=>{
  res.render("posting");
});

app.get("/post/view/:id",(req,res)=>{
  var id = req.params.id;
  Post.findOne({
    where:{id: id}
  }).then(post => {
    if(post != undefined){

      Comment.findAll({
        where:  {postId: post.id},
        order: [ ['id','DESC'] ]

      }).then(comments=> {
        res.render("postViews",{
          post: post,
          comments: comments

        });
      });
    }else{
      res.redirect("/");
    }
  });
});

app.post("/savePost",(req,res)=>{
  var title= req.body.title;
  var desc= req.body.desc;
  Post.create({
    title:title,
    desc: desc
  }).then(()=>{
    res.redirect("/");
  });
});


app.post("/commenting",(req, res)=> {
  var body= req.body.body;
  var postId =req.body.post;
  Comment.create({
    body: body,
    postId: postId
  }).then(()=>{
    res.redirect("/post/view/"+postId);
  });
});

app.listen(8080,()=>{  console.log("API rodando");});
