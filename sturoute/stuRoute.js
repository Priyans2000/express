const express = require("express");
const route = express.Router();

const Infocontroller = require("../stucontroller/stuController");

route.post("/insert", Infocontroller.studentSave);
route.get("/display", Infocontroller.studentDisplay);
route.post("/search", Infocontroller.studentSearch);

module.exports = route;