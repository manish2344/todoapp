const mongoose = require("mongoose");
const database = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB);
    console.log("database connected");
  } catch (err) {
    console.log(err.message);
  }
};
module.exports = database;
