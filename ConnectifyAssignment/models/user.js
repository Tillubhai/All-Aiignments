// const mongoose = require("mongoose");

// const connectifySchema = new mongoose.Schema({
//   firstname: String,
//   lastname: String,
//   email: String,
//   password: String,
// });

// module.exports = mongoose.Model(connectify, connectifySchema, connectify);

// models/user.js
// models/user.js

const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = new mongoose.Schema({
  email: String,
  password: String,
});

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', userSchema);
