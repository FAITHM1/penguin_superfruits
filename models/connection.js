/////////////////////
//import dependesies
////////////////
require("dotenv").config(); //loading env varibales
const mongoose = require("mongoose");
/////////////////////////////////
//establish database connection
//////////////////////////////////
// setup thee inputs for mongoose connect

const DATABASE_URL = process.env.DATABASE_URL; // url from .env
const CONFIG = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

// Connect to Mongo
mongoose.connect(DATABASE_URL, CONFIG);

//our connection messages
mongoose.connection
  .on("open", () => console.log("Connected to Mongo"))
  .on("close", () => console.log("disconnected from mongo"))
  .on("error", (error) => console.log(error));
/////export the connection
module.exports = mongoose;
