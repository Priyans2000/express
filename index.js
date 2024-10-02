const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Inforoute = require("./sturoute/stuRoute");
const bodyParser = require('body-parser');

mongoose.connect("mongodb://127.0.0.1:27017/mongo")
  .then(() => {
    console.log("db connected");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/students", Inforoute);

app.listen(5000, () => {
  console.log("server run 5000 port");
});