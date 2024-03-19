const express = require("express");
const app = express();

const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./db");
const theRoute = require("./routes");

// Load environment variables from .env file
dotenv.config();

//intialize DB
connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Add cors middleware
app.use(cors());

app.get("/ping", (req, res) => {
  res.send("PINGED");
});

app.use("/api/v1", theRoute);

const port = process.env.PORT || 3000;

app.listen(port, () => console.log("Listening on port " + port));
