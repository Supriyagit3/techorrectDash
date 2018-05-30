var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

var TestRun = require("../models/testRun");
var Verify = require("./verify");

var testRunRouter = express.Router({ mergeParams: true });
module.exports = testRunRouter;
testRunRouter.use(bodyParser.json());

testRunRouter
  .route("/")
  .all(Verify.verifyOrdinaryUser)

  .get(function(req, res, next) {
    if (req.query.page) {
      var page = parseInt(req.query.page);
    } else {
      var page = 1;
    }

    if (req.query.perPage) {
      var perPage = parseInt(req.query.perPage);
    } else {
      var perPage = 25;
    }

    var skipAmount = perPage * (page - 1);

    TestRun.find(req.params)
      .sort({ createdAt: -1 })
      .skip(skipAmount)
      .limit(perPage)
      .exec(function(err, testRuns) {
        if (err) throw err;

        TestRun.count(req.params).exec(function(err, count) {
          res.json({
            testRuns: testRuns,
            current: page,
            pages: Math.ceil(count / perPage)
          });
        });
      });
  })

  .post(Verify.verifyAdmin, function(req, res, next) {
    req.body.projectId = req.params.projectId;
    req.body.suiteId = req.params.suiteId;
    req.body.testId = req.params.testId;
    TestRun.create(req.body, function(err, testRun) {
      if (err) throw err;
      var id = testRun._id;

      res.writeHead(200, {
        "Content-Type": "text/plain"
      });
      res.end("Added the test run with id: " + id);
    });
  });
