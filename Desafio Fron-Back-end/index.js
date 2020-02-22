const express = require("express");
const app= express();
const bodyParser = require("body-parser");
const connection =require("./database/database");
const Post = require("./database/Post");
const Comment = require("./database/Comment");
//database
connection
.authenticate()
.then(()=>{
  console.log("conexao realizaoda")
})
.catch((msgErro)=>{
  console.log(msgErro);
})

//estou dizendo para o express usar o ejs
app.set('view engine','ejs');
app.use(express.static('public'));
//config bodyparse
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
//rotas

app.get("/",(req,res)=>{
  Pergunta.findAll({raw: true,order:[
    ['titulo','ASC']//ASC =crescente || DESC decrescente
  ]}).then(perguntas=>{
    res.render("index",{
      perguntas : perguntas
    });
  });
});

app.get("/posting",(req,res)=>{
  res.render("posting");
});

app.post("/savePost",(req,res)=>{
  var titulo= req.body.titulo;
  var desc= req.body.descricao;
  Post.create({
    title:title,
    desc: desc
  }).then(()=>{
    res.redirect("/");
  });
});

app.get("/post/:id",(req ,res) => {
  var id = req.params.id;//procurar po um valor no banco
  Post.findOne({
    where:{id: id}
  }).then(post => {
    if(post != undefined){    //pergunta achada

      Comment.findAll({//listas respostas
        where:  {postId: post.id},
        order: [ ['id','DESC'] ]

      }).then(comment=> {
        res.render("post",{
          post: post,
          comments: comments

        });
      });
    }else{    //não encontrado
      res.redirect("/");
    }
  });
});

app.post("/commenting",(req, res)=> {
  var body= req.body.body;
  var postId =req.body.postId;
  Resposta.create({
    body: body,
    postId: postId
  }).then(()=>{
    res.redirect("/comment/"+postId);
  });
});

app.listen(8080,()=>{  console.log("API rodando");});
