const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PersonasSchema = new Schema({
    nombre1: string,
    nombre2: string,
    apellido1: string,
    apellido2: string,
    telefono: string,
    direccion: string,
    sexo: string,
    id_paises: {
        type: Schema.Types.ObjectId,
        ref: "Paises"
    },
    id_usuarios: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    id_usuarios:




});

var Personas = mongoose.model("Personas", PersonasSchema);
module.exports = Personas;