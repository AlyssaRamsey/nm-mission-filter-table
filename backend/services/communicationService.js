const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const setupCommunication = (tvshows) => {
  app.use(bodyParser.json());
  
  app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, OPTIONS"
    );
    next();
  });

  app.get("/tvshows", (req, res, next) => {
    res.status(200).json({ tvshows: tvshows });
  });
};

module.exports = {
  setupCommunication,
  app
};
