const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FrutasSchema = new Schema({
    nombre_fruta: String,
    imagen: String,
    id_recetas: {
        type: Schema.Types.ObjectId,
        ref: "Recetas"
    }





});

var Frutas = mongoose.model("Frutas", FrutasSchema);
module.exports = Frutas;