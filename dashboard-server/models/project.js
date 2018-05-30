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
  Suite.find({ projectId: this._id })
    .exec(function(err, suites) {
      if (err) throw err;

      var unhealthyCounts = 0;
      var skippedCounts = 0;
      var disabledCounts = 0;
      var healthyCounts = 0;
      
      suites.map(function(suite) {
        if (suite.failingTests > this.healthyFailedLevel)
          unhealthyCounts++;
        else if (suite.skippedTests > this.healthySkippedLevel)
          skippedCounts++;
        else if (suite.disabledTests > this.healthyDisabledLevel)
          disabledCounts++;
        else
          healthyCounts++;
      });

      return cb(unhealthyCounts, skippedCounts, disabledCounts, healthyCounts);
    });
});

var Project = mongoose.model("Project", projectSchema);

module.exports = Project;
