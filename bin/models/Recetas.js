const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RecetasSchema = new Schema({
    recetas: String

});

var Recetas = mongoose.model("Recetas", RecetasSchema);
module.exports = Recetas;