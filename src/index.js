const express = require("express");
const app = express();

app.use(express.json());

const usersController = require("./controllers/user.controllers");

app.use("/users",usersController)


module.exports = app;