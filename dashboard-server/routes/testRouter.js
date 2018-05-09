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
    queryParams = {
      projectId: req.params.projectId,
      suiteId: req.params.suiteId
    };
    if (req.query.name) queryParams.name = req.query.name;
    Test.find(queryParams, function(err, test) {
      if (err) throw err;
      res.json(test);
    });
  })

  .post(function(req, res, next) {
    req.body.projectId = req.params.projectId;
    req.body.suiteId = req.params.suiteId;
    Test.create(req.body, function(err, test) {
      if (err) throw err;
      var id = test._id;

      res.writeHead(200, {
        "Content-Type": "text/plain"
      });
      res.end("Added the test with id: " + id);
    });
  });

testRouter
  .route("/:testId")

  .get(function(req, res, next) {
    Test.findById(req.params.testId, function(err, test) {
      if (err) throw err;
      res.json(test);
    });
  })

  .put(function(req, res, next) {
    Test.findByIdAndUpdate(
      req.params.testId,
      { $set: req.body },
      { new: true },
      function(err, test) {
        if (err) return next(err);
        res.json(test);
      }
    );
  })

  .delete(function(req, res, next) {
    Test.findByIdAndRemove(req.params.testId, function(err, resp) {
      if (err) return next(err);
      res.json(resp);
    });
  });
