// 1 - requirements part
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// 2 - user model part
let userSchema = new Schema({
  firstName: { type: String, required: true, max: 100 },
  lastName: { type: String, required: true, max: 100 },
  email: { type: String, required: true },
  birthDate: { type: Date, required: true },
  gender: { type: String, required: false },
  password: { type: String, required: true },
  balance: { type: Number, required: false }
});

// 3 - export the model
module.exports = mongoose.model("User", userSchema, "users");
