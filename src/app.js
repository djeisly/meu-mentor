const path = require("path");
require("dotenv").config({ path: __dirname + "/.env" });

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const swaggerUi = require("swagger-ui-express");
const swaggerFile = require("../swagger/swagger_output.json");
const mentorRoutes = require("./routes/mentorRoutes");
let db = require("./database/dbConnect");

db = mongoose.connection;

const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/mymentor", mentorRoutes);
app.use("/minha-documentacao", swaggerUi.serve, swaggerUi.setup(swaggerFile));

module.exports = app;




