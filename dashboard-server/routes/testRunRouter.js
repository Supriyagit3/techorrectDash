var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

var TestRun = require("../models/testRun");

var testRunRouter = express.Router({ mergeParams: true });
module.exports = testRunRouter;
testRunRouter.use(bodyParser.json());

testRunRouter
  .route("/")

  .get(function(req, res, next) {
    TestRun.find(
      {
        projectId: req.body.projectId,
        suiteId: req.body.suiteId,
        testId: req.body.testId
      },
      function(err, testRun) {
        if (err) throw err;
        res.json(testRun);
      }
    );
  })

  .post(function(req, res, next) {
    console.log("In POST");
    req.body.projectId = req.params.projectId;
    req.body.suiteId = req.params.suiteId;
    req.body.testId = req.params.testId;
    TestRun.create(req.body, function(err, testRun) {
      if (err) throw err;
      console.log("TestRun created!");
      var id = testRun._id;

      res.writeHead(200, {
        "Content-Type": "text/plain"
      });
      res.end("Added the test run with id: " + id);
    });
  });
