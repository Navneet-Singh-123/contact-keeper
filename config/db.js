// this is the file where we'll be using mongoose to connect to out database
const mongoose = require("mongoose");
const config = require("config");
const db = config.get("mongoURI");

// mongoose returns promises
const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected");
  } catch (err) {
    console.log(err.message);
    process.exit(1); // Exit with failure
  }
};

module.exports = connectDB;
