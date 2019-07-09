const express = require("express");
const app = express();
const {controller} = require("./controller")
const bodyParser = require("body-parser");

app.use( bodyParser.json() );
app.get("/", (req, res)=>{
res.send("HOLA");
})

app.get("/users", (req, res)=>{
 /*let users = [
     {name:"alma", password: "njkdhkjh" },
     {name:"beatriz", password: "njdt" },
     {name:"oswaldo", password: "nfgfhh" },
]

   res.send(users);*/
   controller.getUsers(res);
})
app.post("/users", (req, res)=>{
    //console.log(req.body);
    controller.postUsers(req, res);


})


//Traer un usuario por su id
app.get("/usuarios/:id_personas", function(req, res) {
  console.log(req.params)
 res.send("ok")
});

//Traer un usuario por su país
app.get("/usuarios/:id_usuario/paises", function(req, res) {
  console.log(req.params)
 res.send("ok")
});

app.get("/usuarios/:id_usuario/recetas/", function(req, res) {
  console.log(req.params)
 res.send("ok")
});

app.get("/comentarios/:id_usuario/recetas/", function(req, res) {
  console.log(req.params)
 res.send("ok")
});

app.get("/personas/:id_usuario/", function(req, res) {
  console.log(req.params)
 res.send("ok")
});


exports.app = app;