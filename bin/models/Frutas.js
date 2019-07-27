const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FrutasSchema = new Schema({
    frutas: String,





});

var Frutas = mongoose.model("Frutas", FrutasSchema);
module.exports = Frutas;