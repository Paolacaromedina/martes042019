const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PaisesSchema = new Schema({
    nombre: String,
    imagen: String,
    id_usuario: {
        type: Schema.Types.ObjectId,
        ref: "Users"
    },
    id_frutas: {
        type: Schema.Types.ObjectId,
        fer: "Frutas"
    }





});

var Paises = mongoose.model("Paises", PaisesSchema);
module.exports = Paises;