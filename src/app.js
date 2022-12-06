const path = require('path');
require('dotenv').config({path: __dirname+'/.env'})
const express = require("express");
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express()
const mongoose = require("mongoose")
const mentorRoutes = require("./routes/mentorRoutes")



mongoose.connect(process.env.DATABASE_MONGO),  {
    useNewUrlParser: true,
    useUnifiedTopology: true
};

let db = mongoose.connection;

db.on("error", console.log.bind(console, "connection error:"))
db.once("open", function (){
  console.log("conexão feita com sucesso.")
})

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/mymentor", mentorRoutes)


module.exports = app