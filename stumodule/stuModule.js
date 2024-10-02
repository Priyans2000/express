// const mongoose = require("mongoose");
// const stuSchema = new mongoose.schema({
//     rollno:Number,
//     Name:String,
//     city:String,
//     fees:Number
// });

// module.exports   =  mongoose.model("student",stuSchema);



const mongoose = require("mongoose");

const stuSchema = new mongoose.Schema({
  rollno: Number,
  Name: String,
  city: String,
  fees: Number
});

module.exports = mongoose.model("Student", stuSchema);