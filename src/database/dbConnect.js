const DATABASE_MONGO = process.env.DATABASE_MONGO;
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

mongoose.connect(DATABASE_MONGO, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

let db = mongoose.connection;

db.on("error", console.log.bind(console, "connection error:"));
db.once("open", function () {
  console.log("Banco conectado com sucesso!");
});

module.exports = db;
