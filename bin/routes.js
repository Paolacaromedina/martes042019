const express = require("express");
const app = express();
const {controller} = require("./controller")

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

exports.app = app;