var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

var Test = require("../models/test");

var testRouter = express.Router({ mergeParams: true });
module.exports = testRouter;
testRouter.use(bodyParser.json());

testRouter
  .route("/")

  .get(function(req, res, next) {
    Test.find({}, function(err, test) {
      if (err) throw err;
      res.json(test);
    });
  })

  .post(function(req, res, next) {
    req.body.projectId = req.params.projectId;
    req.body.suiteId = req.params.suiteId;
    Test.create(req.body, function(err, test) {
      if (err) throw err;
      console.log("Test created!");
      var id = test._id;

      res.writeHead(200, {
        "Content-Type": "text/plain"
      });
      res.end("Added the test with id: " + id);
    });
  });
