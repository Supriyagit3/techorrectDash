var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var testRunSchema = new Schema(
  {
    suiteRunId: {
      type: String,
      required: true
    },
    passed: {
      type: Boolean,
      required: true
    },
    skipped: {
      type: Boolean,
      required: true
    },
    disabled: {
      type: Boolean,
      required: true
    },
    log: {
      type: String,
      required: true
    },
    projectId: {
      type: Schema.Types.ObjectId,
      ref: "Project"
    },
    suiteId: {
      type: Schema.Types.ObjectId,
      ref: "Suite"
    },
    testId: {
      type: Schema.Types.ObjectId,
      ref: "Test"
    }
  },
  {
    timestamps: true
  }
);

var TestRun = mongoose.model("TestRun", testRunSchema);

module.exports = TestRun;
