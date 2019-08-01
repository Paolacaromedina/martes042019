const mongoose = require("mongoose");
const User = require("./models/User");
const Recetas = require("./models/Recetas")
const Personas = require("./models/Personas")
const Comentarios = require("./models/Comentarios")
const Frutas = require("./models/Frutas")
const Paises = require("./models/Paises")
class controller{
    constructor(){
        this.connect();
    }

 async connect(){
     try{
        await mongoose.connect(
            "mongodb+srv://oswaldo:oswaldo10@cluster0-hbsyj.mongodb.net/mix_fruit?retryWrites=true&w=majority",
      {useNewUrlParser:true}
        );
        console.log("Conectados a la base de datos")

     }catch(e){
        console.error(e)
     }
 }

 getUsers(res){
     User.find({}, (err, users)=>{
         if(err) throw err;

         res.send( users );
     })

 }

 getRecetas(res){
     Recetas.find({}, (err, Recetas)=>{
         if(err) throw err;

         res.send( Recetas );
     })

 }

 getComentarios(res){
     Comentarios.find({}, (err, Comentarios)=>{
         if(err) throw err;

         res.send( Comentarios );
     })

 }

 getFrutas(res){
     Frutas.find({}, (err, Frutas)=>{
         if(err) throw err;

         res.send( Frutas );
     })

 }

getPaises(res){
     Paises.find({}, (err, Paises)=>{
         if(err) throw err;

         res.send( Paises );
     })

 }

getPersonas(res){
     Personas.find({}, (err, Personas)=>{
         if(err) throw err;

         res.send( Personas );
     })

 }


  postUsers(req, res){
      let users = req.body.users;
      User.create( users, (err, result)=>{
          if(err)throw err;
          res.send({newUsers:result})
      } )

  }
  postRecetas(req, res){
      let recetas = req.body.recetas;
      Recetas.create( recetas, (err, result)=>{
          if(err)throw err;
          res.send({newReceta:result})
      } )

  }
  postpaises(req, res){
      let paises = req.body.paises;
      Paises.create( paises, (err, result)=>{
          if(err)throw err;
          res.send({newpais: result})
      } )

  }
  postcomentarios(req, res){
      let comentarios = req.body.comentarios;
      Comentarios.create( comentarios, (err, result)=>{
          if(err)throw err;
          res.send({newcomentario: result})
      } )

  }
  deleteUsers(req, res){
      let users = req.body.users;
      User.Delete( users, (err, result)=>{
          if(err)throw err;
          res.send({Usuario_Eliminado: result})
      } )

  }
}


exports.controller = new controller()
