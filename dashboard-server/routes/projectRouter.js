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
    Project.find({}, function(err, dish) {
      if (err) throw err;
      res.json(dish);
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
