const path = require('path');
require('dotenv').config({path: __dirname+'/.env'})
const express = require("express")
const app = express()
const mongoose = require("mongoose")

mongoose.connect(process.env.DATABASE_MONGO),  {
    useNewUrlParser: true,
    useUnifiedTopology: true
};

let db = mongoose.connection;

db.on("error", console.log.bind(console, "connection error:"))
db.once("open", function (){
  console.log("conexão feita com sucesso.")
})



module.exports = app