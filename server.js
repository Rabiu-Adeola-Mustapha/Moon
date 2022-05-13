const express = require("express");
const dbConnect = require("./config/db");
const productRoutes = require("./routes/productRoutes");
const dotenv = require("dotenv");
const AuthRouter = require("./routes/authRoutes");

dotenv.config();
const app = express();

app.use(express.json());

app.use("/api/product", productRoutes);
app.use("/api/user", AuthRouter);

const start = async () => {
  PORT = process.env.PORT;
  await dbConnect();

  app.listen(5000, () => {
    console.log(`💋 Server up on port ${PORT}`);
  });
};

start();
