const mogoose = require("mongoose");
const Schema = mogoose.Schema;

const UserSchema = new Schema({
    nickname: String,
    password: String,
    picture: String
});

var User = mongoose.model("User", UserSchema);
module.exports = User;