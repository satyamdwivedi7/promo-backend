const express = require("express");
const mongoose = require("mongoose");
const Router = require("./router/router");

const app = express();

app.use(express.json());
app.use("/api", Router);

mongoose
  .connect("mongodb://localhost:27017/promo")
  .then(() => {
    // If the connection is successful;
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    // If the connection is unsuccessful;
    console.log("Connection failed");
    console.log(err);
  });

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
