var mongoose = require("mongoose");
var Suite = require("../models/suite");
var Schema = mongoose.Schema;

var projectSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true
    },
    healthyFailedLevel: {
      type: Number,
      required: true
    },
    healthySkippedLevel: {
      type: Number,
      required: true
    },
    healthyDisabledLevel: {
      type: Number,
      required: true
    }
  },
  {
    timestamps: true
  }
);

projectSchema.method("getSuiteCounts", function(cb) {
  thisFailedLvl = this.healthyFailedLevel;
  thisSkippedLvl = this.healthySkippedLevel;
  thisDisabledLvl = this.healthyDisabledLevel;
  Suite.find({ projectId: this._id })
    .exec(function(err, suites) {
      if (err) throw err;

      var unhealthyCounts = 0;
      var healthyCounts = 0;
      
      suites.map(function(suite) {
        if (suite.failingTests < thisFailedLvl &&
            suite.skippedTests < thisSkippedLvl &&
            suite.disabledTests < thisDisabledLvl)
          healthyCounts++;

        if (suite.failingTests > this.healthyFailedLevel)
          unhealthyCounts++;
        if (suite.skippedTests > this.healthySkippedLevel)
          unhealthyCounts++;
        if (suite.disabledTests > this.healthyDisabledLevel)
          unhealthyCounts++;
      });

      return cb(unhealthyCounts, healthyCounts);
    });
});

var Project = mongoose.model("Project", projectSchema);

module.exports = Project;
