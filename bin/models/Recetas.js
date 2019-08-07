const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RecetasSchema = new Schema({
    receta: String,
    imagen: String,
    id_usuarios: [{
        type: Schema.Types.ObjectId,
        ref: "Users"
    }],
    id_frutas: {
        type: Schema.Types.ObjectId,
        ref: "Frutas"

    }

});

var Recetas = mongoose.model("Recetas", RecetasSchema);
module.exports = Recetas;