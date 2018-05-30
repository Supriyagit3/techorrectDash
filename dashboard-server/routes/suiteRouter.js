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

    Suite.find(req.params)
      .skip(skipAmount)
      .limit(perPage)
      .exec(function(err, suites) {
        if (err) return next(err);
        if (req.query.name) {
          res.json(suites);
        } else {
          Suite.count(req.params).exec(function(err, count) {
            if (err) throw err;
            // TODO: calculate passing, failing, skipped and disabled tests.
            res.json({
              suites: suites,
              current: page,
              pages: Math.ceil(count / perPage)
            });
          });
        }
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

suiteRouter
  .route("/:suiteId")

  .get(function(req, res, next) {
    Suite.findById(req.params.suiteId, function(err, suite) {
      if (err) throw err;
      res.json(suite);
    });
  })

  .put(function(req, res, next) {
    Suite.findByIdAndUpdate(
      req.params.suiteId,
      { $set: req.body },
      { new: true },
      function(err, suite) {
        if (err) return next(err);
        res.json(suite);
      }
    );
  })

  .delete(function(req, res, next) {
    Suite.findByIdAndRemove(req.params.suiteId, function(err, resp) {
      if (err) return next(err);
      res.json(resp);
    });
  });
