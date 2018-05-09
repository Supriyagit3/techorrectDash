var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var suiteSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    passingTests: {
      type: Number,
      required: true
    },
    failingTests: {
      type: Number,
      required: true
    },
    skippedTests: {
      type: Number,
      required: true
    },
    disabledTests: {
      type: Number,
      required: true
    },
    disabledTests: {
      type: Number,
      required: true
    },
    previousSuiteIds: [String],
    projectId: {
      type: Schema.Types.ObjectId,
      ref: "Project"
    }
  },
  {
    timestamps: true
  }
);

suiteSchema.index({ projectId: 1, name: 1 }, { unique: true });

var Suite = mongoose.model("Suite", suiteSchema);

module.exports = Suite;
