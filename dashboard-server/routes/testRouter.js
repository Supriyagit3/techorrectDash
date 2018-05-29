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

    if (req.query.name) req.params.name = req.query.name;

    Test.find(req.params)
      .skip(skipAmount)
      .limit(perPage)
      .exec(function(err, tests) {
        if (err) return next(err);
        if (req.query.name) {
          res.json(tests);
        } else {
          Test.count(req.params).exec(function(err, count) {
            res.json({
              tests: tests,
              current: page,
              pages: Math.ceil(count / perPage)
            });
          });
        }
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
