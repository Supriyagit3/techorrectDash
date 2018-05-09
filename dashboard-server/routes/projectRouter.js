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
    Project.find({}, function(err, project) {
      if (err) throw err;
      res.json(project);
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
