const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ComentariosSchema = new Schema({
    comentario: String,
    fecha: String,
    id_recetas: {
        type: Schema.Types.ObjectId,
        ref: "Recetas"
    },
    id_usuarios: {

    }

});

var Comentarios = mongoose.model("Comentarios", ComentariosSchema);
module.exports = Comentarios;