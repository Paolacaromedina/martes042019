const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PaisesSchema = new Schema({
    paises: String,





});

var Paises = mongoose.model("Paises", PaisesSchema);
module.exports = Paises;