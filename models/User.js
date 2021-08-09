const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "User must Have a name"],
  },
  username: {
    type: String,
    required: [true, "User must be assignend a Username"],
    unique: true,
  },
  email: {
    type: String,
    required: [true, "User must have an email"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Use can not be registered without password"],
  },
});

const userModel = mongoose.model("Users", UserSchema);
module.exports = userModel;
