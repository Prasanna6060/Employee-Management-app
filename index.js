const express = require("express");
const dotenv = require("dotenv");
const mongoose = require('mongoose')
dotenv.config();

const app = express();
const PORT = process.env.PORT;

 mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to Mongodb")
  }).catch( (err) => {
    console.log(err);
  })


app.listen(PORT, () => {
  console.log(`Server is runnign on port ${PORT}`);
});
