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

exports.app = app;