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
    timestamps: true,
    toObject: { virtuals: true },
    toJSON: { virtuals: true }
  }
);

projectSchema.method("getHealthySuites", function() {
  Suite.count({ projectId: this._id }, function(err, count) {
    return count;
  });
});

projectSchema.virtual("healthySuites").get(function() {
  return this.getHealthySuites();
});

projectSchema.virtual("unhealthySuites").get(function() {
  return 0;
});

var Project = mongoose.model("Project", projectSchema);

module.exports = Project;
