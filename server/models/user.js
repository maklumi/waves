const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
    trim: true,
    unique: 1
  },
  password: {
    type: String,
    required: true,
    minLength: 2
  },
  name: {
    type: String,
    required: true,
    maxLength: 80
  },
  lastname: {
    type: String,
    required: true,
    maxLength: 80
  },
  cart: {
    type: Array,
    default: []
  },
  history: {
    type: Array,
    default: []
  },
  role: {
    type: Number,
    default: 0
  },
  token: {
    type: String
  }
});

const User = mongoose.model("User", userSchema);

module.exports = { User };
