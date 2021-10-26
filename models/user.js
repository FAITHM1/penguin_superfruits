///////////////////////////////////
// import dependencies
///////////////////////////////////
// import the existing connected mongoose object from connection.js
const mongoose = require("./connection");
//////////////////////
//create our Fruits Model
///////////////////////
//destructuring Schema and model from monogoose
const { Schema, model } = mongoose;
//make fruits schema
const userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});
//make the fruit model
const User = model("User", userSchema);
// log the model to make sure it exists
//console.log(Fruit);
////////////////////
//export fruit
//////
module.exports = User;
