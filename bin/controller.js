const mongoose = require("mongoose");
const User = require("./models/User");
const Recetas = require("./models/Recetas")
const Personas = require("./models/Personas")
const Comentarios = require("./models/Comentarios")
const Frutas = require("./models/Frutas")
const Paises = require("./models/Paises")
class controller {
    constructor() {
        this.connect();
    }

    async connect() {
        try {
            await mongoose.connect(
                "mongodb+srv://oswaldo:oswaldo10@cluster0-hbsyj.mongodb.net/mix_fruit?retryWrites=true&w=majority",
                { useNewUrlParser: true }
            );
            console.log("Conectados a la base de datos")

        } catch (e) {
            console.error(e)
        }
    }

    getUsers(res) {
        User.find({}, (err, users) => {
            if (err) throw err;

            res.send(users);
        })

    }

    getRecetas(res) {
        Recetas.find({}, (err, Recetas) => {
            if (err) throw err;

            res.send(Recetas);
        })

    }

    getComentarios(res) {
        Comentarios.find({}, (err, Comentarios) => {
            if (err) throw err;

            res.send(Comentarios);
        })

    }
    eliminarusuario(id, res) {
        User.deleteOne({ _id: id }, function(err) {
            if (err) throw err;
            res.send({ message: "El usuario ha sido eliminado" });
        });
    }

    getFrutas(res) {
        Frutas.find({}, (err, Frutas) => {
            if (err) throw err;

            res.send(Frutas);
        })

    }

    getPaises(res) {
        Paises.find({}, (err, Paises) => {
            if (err) throw err;

            res.send(Paises);
        })

    }

    getPersonas(res) {
        Personas.find({}, (err, Personas) => {
            if (err) throw err;

            res.send(Personas);
        })

    }


    postUsers(req, res) {
        let users = req.body.users;
        User.create(users, (err, result) => {
            if (err) throw err;
            res.send({ newUsers: result })
        })

    }
    postRecetas(req, res) {
        let recetas = req.body.recetas;
        Recetas.create(recetas, (err, result) => {
            if (err) throw err;
            res.send({ newReceta: result })
        })

    }
    postpaises(req, res) {
        let paises = req.body.paises;
        Paises.create(paises, (err, result) => {
            if (err) throw err;
            res.send({ newpais: result })
        })

    }
    postcomentarios(req, res) {
        let comentarios = req.body.comentarios;
        Comentarios.create(comentarios, (err, result) => {
            if (err) throw err;
            res.send({ newcomentario: result })
        })

    }
    deleteUsers(req, res) {
        let users = req.body.users;
        User.Delete(users, (err, result) => {
            if (err) throw err;
            res.send({ Usuario_Eliminado: result })
        })

    }


    traerusuarioporid(id, res) {
        //en el modelo User se ejecuta el find sin ninguna condicion...
        User.find({ _id: id }, (err, usuario) => {
            //en caso de haberse presentado un error se ejecuta el error
            if (err) throw err;
            //de lo contrario se retorna un objeto con todos los resultados
            res.send({ User: usuario });
        });
    }

    updateUser(user, res) {
        //optenemos los campos que queremos actualizar
        let { id, picture, password } = user;
        //actualizamos teniendo en cuenta una condicion con el operador $set
        //https://docs.mongodb.com/manual/reference/operator/update/set/
        User.updateOne(
            { _id: id },
            { $set: { picture: picture, password: password } }
        )
            .then(rawResponse => {
                res.send({ message: "User updated", raw: rawResponse });
            })
            .catch(err => {
                if (err) throw err;
            });
    }
}


exports.controller = new controller()
