"use strict";

const mongoose = require("mongoose");

const connectString = `mongodb://127.0.0.1:27017/shopDEV`;
mongoose
  .connect(connectString)
  .then(() => console.log(`Connected Mongodb Success`))
  .catch((error) => console.log("Error Connect!"));

module.exports = mongoose;
