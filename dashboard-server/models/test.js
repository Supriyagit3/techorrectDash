var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var testSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    currentPassed: {
      type: Boolean,
      required: true
    },
    skip: {
      type: Boolean,
      required: true
    },
    disable: {
      type: Boolean,
      required: true
    },
    rerun: {
      type: Boolean,
      required: true
    },
    previousSuiteIds: [String],
    projectId: {
      type: Schema.Types.ObjectId,
      ref: "Project"
    },
    suiteId: {
      type: Schema.Types.ObjectId,
      ref: "Suite"
    }
  },
  {
    timestamps: true
  }
);

testSchema.index({ projectId: 1, suiteId: 1, name: 1 }, { unique: true });

var Test = mongoose.model("Test", testSchema);

module.exports = Test;
