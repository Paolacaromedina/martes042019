const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    nickname: String,
    password: String,
    picture: String,
    id_recetas: {
        type: Schema.Types.ObjectId,
        ref: "Recetas"
    }
});

var User = mongoose.model("User", UserSchema);
module.exports = User;