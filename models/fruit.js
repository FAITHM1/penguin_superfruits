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
const fruitSchema = new Schema({
  name: String,
  color: String,
  readyToEat: Boolean,
});
//make the fruit model
const Fruit = model("Fruit", fruitSchema);
// log the model to make sure it exists
//console.log(Fruit);
////////////////////
//export fruit
//////
module.exports = Fruit;
