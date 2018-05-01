var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

var Suite = require("../models/suite");

var suiteRouter = express.Router({ mergeParams: true });
module.exports = suiteRouter;
suiteRouter.use(bodyParser.json());

suiteRouter
  .route("/")

  .get(function(req, res, next) {
    Suite.find({}, function(err, suite) {
      if (err) throw err;
      res.json(suite);
    });
  })

  .post(function(req, res, next) {
    req.body.projectId = req.params.projectId;
    Suite.create(req.body, function(err, suite) {
      if (err) throw err;
      console.log("Suite created!");
      var id = suite._id;

      res.writeHead(200, {
        "Content-Type": "text/plain"
      });
      res.end("Added the suite with id: " + id);
    });
  });
