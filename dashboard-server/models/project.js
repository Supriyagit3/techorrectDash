var mongoose = require("mongoose");
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

var Project = mongoose.model("Project", projectSchema);

module.exports = Project;
