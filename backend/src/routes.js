const express = require("express");

const ParticipantsController = require("./controllers/ParticipantsController");

const routes = express.Router();

routes.get("/participants", ParticipantsController.index);

module.exports = routes;
