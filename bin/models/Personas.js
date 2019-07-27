const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PersonasSchema = new Schema({
    personas: String,




});

var Personas = mongoose.model("Personas", PersonasSchema);
module.exports = Personas;