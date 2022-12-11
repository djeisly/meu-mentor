const DATABASE_MONGO = process.env.DATABASE_MONGO
const mongoose = require ("mongoose");
mongoose.set('strictQuery', false);

mongoose.connect(DATABASE_MONGO, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})


let db = mongoose.connection;

module.exports = db;

/*require('dotenv-safe').config()
const DATABASE_MONGO = process.env.DATABASE_MONGO
const mongoose = require ("mongoose");
mogoose.set("strictQuery", flase);

const conect = async () => {
  try {
      await mongoose.connect(DATABASE_MONGO, {
        useNewUrlParser: true,
        useUnifiedTopology: true
      })
      
      console.log("Banco conectado!")
  } catch (error) {
    console.erro(error)
  }
}    */