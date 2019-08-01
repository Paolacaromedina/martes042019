const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PaisesSchema = new Schema({
    nombre: String,
    ubicacion: String,
    continente: String





});

var Paises = mongoose.model("Paises", PaisesSchema);
module.exports = Paises;