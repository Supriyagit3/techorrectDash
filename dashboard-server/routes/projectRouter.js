var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

var Project = require("../models/project");

var projectRouter = express.Router();
module.exports = projectRouter;
projectRouter.use(bodyParser.json());

projectRouter
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

    Project.find({})
      .skip(skipAmount)
      .limit(perPage)
      .exec(function(err, projects) {
        if (err) throw err;

        Project.count(req.params).exec(function(err, count) {
          console.log(projects[0].getHealthySuites());
          res.json({
            // TODO: calculate healthy and unhealthy suites
            projects: projects,
            current: page,
            pages: Math.ceil(count / perPage)
          });
        });
      });
  })

  .post(function(req, res, next) {
    Project.create(req.body, function(err, project) {
      if (err) throw err;
      console.log("Project created!");
      var id = project._id;

      res.writeHead(200, {
        "Content-Type": "text/plain"
      });
      res.end("Added the project with id: " + id);
    });
  });

projectRouter
  .route("/:projectId")

  .get(function(req, res, next) {
    Project.findById(req.params.projectId, function(err, project) {
      if (err) return next(err);
      res.json(project);
    });
  })

  .put(function(req, res, next) {
    Project.findByIdAndUpdate(
      req.params.projectId,
      { $set: req.body },
      { new: true },
      function(err, project) {
        if (err) return next(err);
        res.json(project);
      }
    );
  })

  .delete(function(req, res, next) {
    Project.findByIdAndRemove(req.params.projectId, function(err, resp) {
      if (err) return next(err);
      res.json(resp);
    });
  });
