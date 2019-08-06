const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PersonasSchema = new Schema({
    nombre1: String,
    nombre2: String,
    apellido1: String,
    apellido2: String,
    telefono: String,
    direccion: String,
    sexo: String,
    id_paises: {
        type: Schema.Types.ObjectId,
        ref: "Paises"
    },
    id_usuarios: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
});

var Personas = mongoose.model("Personas", PersonasSchema);
module.exports = Personas;