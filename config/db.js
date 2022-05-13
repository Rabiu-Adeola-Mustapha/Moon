const mongoose = require("mongoose");

// mongoose
//   .connect("mongodb://localhost:27017/moon")
//   .then(() => console.log("moon"));

const dbConnect = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/moonbnpl");

    console.log(" 👌 DataBase up on Moon");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = dbConnect;
