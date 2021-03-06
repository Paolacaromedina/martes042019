const express = require("express");
const app = express();
const { controller } = require("./controller")
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.get("/", (req, res) => {
    res.send("HOLA");
})

app.get("/users", (req, res) => {
    /*let users = [
        {name:"alma", password: "njkdhkjh" },
        {name:"beatriz", password: "njdt" },
        {name:"oswaldo", password: "nfgfhh" },
   ]

      res.send(users);*/
    controller.getUsers(res);
})

app.get("/recetas", (req, res) => {

    controller.getRecetas(res);
})

app.get("/comentarios", (req, res) => {

    controller.getComentarios(res);
})

app.get("/frutas", (req, res) => {

    controller.getFrutas(res);
})

app.get("/paises", (req, res) => {

    controller.getPaises(res);
})

app.get("/personas", (req, res) => {

    controller.getPersonas(res);
})

app.delete("/users/:id", function(req, res) {
    let { id } = req.params;
    controller.eliminarusuario(id, res);
})


app.post("/users", (req, res) => {
    //console.log(req.body);
    controller.postUsers(req, res);


})

app.post("/recetas", (req, res) => {
    //console.log(req.body);
    controller.postRecetas(req, res);


})
app.post("/paises", (req, res) => {
    //console.log(req.body);
    controller.postpaises(req, res);


})

app.post("/comentarios", (req, res) => {
    //console.log(req.body);
    controller.postcomentarios(req, res);


})



//Traer un usuario por su id
app.get("/users/:id", function(req, res) {
    let { id } = req.params;
    controller.traerusuarioporid(id, res);
});


//Traer un usuario por su país
app.get("/usuarios/:id_usuario/paises", function(req, res) {
    console.log(req.params)
    res.send("ok")
});

app.put("/users/:id", function(req, res) {
    let user = req.body.user;
    user.id = req.params.id;
    controller.updateUser(user, res);
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
//rutas para comentarios
app.get("/cometarios", (req, res) => {
    controller.traerusuarios(res);
})
app.get("/users/:id_users/recetas/:id_recetas", (req, res) => {
    let { id_users, id_recetas } = req.params;
    controller.getUsuariorecetas(id_users, id_recetas, res);
})
app.get("/personas/:id_personas/paises/:id_paises/users/:id_users", (req, res) => {
    let { id_users, id_paises, id_personas } = req.params;
    controller.getUsuarios_y_sus_paises(id_users, id_paises, id_personas, res);
})
app.get("/comentarios/:id_comentario/recetas/:id_recetas", (req, res) => {
    let { id_comentario, id_recetas } = req.params;
    controller.comentariosdelareceta(id_comentario, id_recetas, res);
})


exports.app = app;