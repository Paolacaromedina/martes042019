const mongoose = require("mongoose");
const User = require("./models/User");
const Recetas = require("./models/Recetas")
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


  postUsers(req, res){
      let users = req.body.users;
      User.create( users, (err, result)=>{
          if(err)throw err;
          res.send({newUsers:result})
      } )

  }
}


exports.controller = new controller()