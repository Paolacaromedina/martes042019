const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ComentariosSchema = new Schema({
    comentarios: String

});

var Comentarios = mongoose.model("Comentarios", ComentariosSchema);
module.exports = Comentarios;