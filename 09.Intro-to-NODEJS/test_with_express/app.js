//A module imported from the node module, is always inside a quote and without slashes or dots
const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");
const database = require("./database");
const controllers = require("./controllers");
const app = express();
const { MESSAGES } = constants;

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

//base api
app.get("/", (req, res) => {
  res.status(200).send({ message: MESSAGES.FETCHED, success: true });
});

//fetch all users
app.get("/api/vl/users", async (req, res) => {
  try {
    const users = await controllers.getAllPersons();
    res
      .status(200)
      .send({ message: MESSAGES.FETCHED, success: true, data: users });
  } catch (err) {
    res
      .status(500)
      .send({ message: err.message || MESSAGES.ERROR, success: false });
  }
});

//create a user
app.post("/api/vl/users", async (req, res) => {
  try {
    const data = await controllers.addPerson(req.body);
    res.status(201).send({ message: MESSAGES.CREATED, success: true, data });
  } catch (err) {
    res
      .status(500)
      .send({ message: err.message || MESSAGES.ERROR, success: false });
  }
});

//get a user
app.post("/api/vl/users/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const data = await controllers.getUserById(id);
    res.status(200).send({ message: MESSAGES.FETCHED, success: true, data });
  } catch (err) {
    res
      .status(500)
      .send({ message: err.message || MESSAGES.ERROR, success: false });
  }
});

//edit a user
app.patch("/api/vl/users/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const body = req.body;

    const data = await controllers.editUserById(id);
    res.status(200).send({ message: MESSAGES.UPDATED, success: true, data });
  } catch (err) {
    res
      .status(500)
      .send({ message: err.message || MESSAGES.ERROR, success: false });
  }
});

//delete a user
app.delete("/api/vl/users/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const data = await controllers.deleteUserById(id);
    res.status(200).send({ message: MESSAGES.DELETED, success: true, data });
  } catch (err) {
    res
      .status(500)
      .send({ message: err.message || MESSAGES.ERROR, success: false });
  }
});

app.listen(PORT, () => {
  //start up the server
  database();

  console.log(`server started on port ${PORT}`);
});

module.exports = app;
