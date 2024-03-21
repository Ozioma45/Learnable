const express = require("express");
const mongoose = require("mongoose");
const app = express();
const router = require("./route/index.route");

require("dotenv").config();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/api/v1", router);

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("Connected to our MongoDB Database");
  })
  .catch(() => {
    console.log("There was an issue while connecting to the database");
  });

const port = process.env.port || 4000;

app.listen(port, () => {
  console.log(`Server is up and running on ${port}`);
});
