const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: "string",
  },

  email: {
    type: "string",
    required: true,
    unique: true,
  },
  password: {
    type: "string",
    required: true,
  },
});

const User = new mongoose.model("user", userSchema);

module.exports = User;
