////////////////////////
//import dependeses
///////////////////////
const mongoose = require("./connection");
const Fruit = require("./fruit");
/////////////////////////////////
//seed code
////////////////////////////////
//save the connection
const db = mongoose.connection;

// make sure code doesn't run till connection is open
db.on("open", () => {
  // array of starter fruits
  const startFruits = [
    { name: "Orange", color: "orange", readyToEat: false },
    { name: "Grape", color: "purple", readyToEat: false },
    { name: "Banana", color: "orange", readyToEat: false },
    { name: "Strawberry", color: "red", readyToEat: false },
    { name: "Coconut", color: "brown", readyToEat: false },
  ];

  // delete all fruits
  Fruit.deleteMany({}).then((data) => {
    // seed the starter fruits
    Fruit.create(startFruits).then((data) => {
      console.log(data);
      db.close();
    });
  });
});
