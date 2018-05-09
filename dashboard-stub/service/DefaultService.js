"use strict";

/**
 * Gets the projects that the logged in user is authorized to view.
 *
 * xAccessToken String
 * returns List
 **/
exports.projectsGET = function(xAccessToken) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples["application/json"] = [
      {
        unhealthySuites: 20,
        healtyFailedLevel: 5,
        healthyDisabledLevel: 10,
        name: "Project name 1",
        projectId: "project1",
        healthySkippedLevel: 5,
        healthySuites: 300
      },
      {
        unhealthySuites: 2,
        healtyFailedLevel: 5,
        healthyDisabledLevel: 10,
        name: "Project name 2",
        projectId: "project2",
        healthySkippedLevel: 5,
        healthySuites: 45
      }
    ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
};

/**
 * Options operation
 *
 * no response value expected for this operation
 **/
exports.projectsOPTIONS = function() {
  return new Promise(function(resolve, reject) {
    resolve();
  });
};

/**
 * Gets the suites that have run for a given project
 *
 * xAccessToken String
 * projectId String
 * prevRuns Integer  (optional)
 * returns List
 **/
exports.projectsProjectIdSuitesGET = function(
  xAccessToken,
  projectId,
  prevRuns
) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples["application/json"] = [
      {
        skippedTests: 3,
        suiteId: "suite1",
        disabledTests: 3,
        failingTests: 4,
        passingTests: 100,
        name: "Suite name 1",
        previousSuiteIds: ["suite1Run1", "suite1Run2"]
      },
      {
        skippedTests: 3,
        suiteId: "suite2",
        disabledTests: 3,
        failingTests: 4,
        passingTests: 100,
        name: "Suite name 2",
        previousSuiteIds: ["suite2Run1", "suite2Run2"]
      }
    ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
};

/**
 * Options operation
 *
 * projectId String
 * no response value expected for this operation
 **/
exports.projectsProjectIdSuitesOPTIONS = function(projectId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
};

/**
 * Gets the tests that have run for a given suite
 *
 * projectId String
 * suiteId String
 * suiteRunId String
 * returns List
 **/
exports.projectsProjectIdSuitesSuiteIdSuiteRunIdTestRunsGET = function(
  projectId,
  suiteId,
  suiteRunId
) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples["application/json"] = [
      {
        log: "Test passed",
        SuiteRunId: "suite1Run1",
        testId: "test1",
        dateRun: "2000-01-23T04:56:07.000+00:00",
        disabled: false,
        passed: true,
        skipped: false
      },
      {
        log: "Test failed",
        SuiteRunId: "suite1Run2",
        testId: "test1",
        dateRun: "2000-01-22T04:56:07.000+00:00",
        disabled: false,
        passed: false,
        skipped: false
      }
    ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
};

/**
 * Options operation
 *
 * projectId String
 * suiteId String
 * suiteRunId String
 * no response value expected for this operation
 **/
exports.projectsProjectIdSuitesSuiteIdSuiteRunIdTestRunsOPTIONS = function(
  projectId,
  suiteId,
  suiteRunId
) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
};

/**
 * Gets the tests that have run for a given suite
 *
 * xAccessToken String
 * projectId String
 * suiteId String
 * returns List
 **/
exports.projectsProjectIdSuitesSuiteIdTestsGET = function(
  xAccessToken,
  projectId,
  suiteId
) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples["application/json"] = [
      {
        currentPassed: false,
        disable: false,
        name: "Test Name 1",
        testId: "test1",
        skip: false,
        rerun: false,
        previousSuiteIds: ["suite1Run1", "suite1Run2"]
      },
      {
        currentPassed: true,
        disable: false,
        name: "Test Name 2",
        testId: "test2",
        skip: false,
        rerun: false,
        previousSuiteIds: ["suite1Run1", "suite1Run2"]
      }
    ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
};

/**
 * Options operation
 *
 * projectId String
 * suiteId String
 * no response value expected for this operation
 **/
exports.projectsProjectIdSuitesSuiteIdTestsOPTIONS = function(
  projectId,
  suiteId
) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
};

/**
 * Options operation
 *
 * projectId String
 * suiteId String
 * testId String
 * no response value expected for this operation
 **/
exports.projectsProjectIdSuitesSuiteIdTestsTestIdDisableOPTIONS = function(
  projectId,
  suiteId,
  testId
) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
};

/**
 * Disables the test from running
 *
 * xAccessToken String
 * projectId String
 * suiteId String
 * testId String
 * prevRuns Integer  (optional)
 * returns List
 **/
exports.projectsProjectIdSuitesSuiteIdTestsTestIdDisablePOST = function(
  xAccessToken,
  projectId,
  suiteId,
  testId,
  prevRuns
) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples["application/json"] = [
      {
        log: "Test passed",
        SuiteRunId: "suite1Run1",
        testId: "test1",
        dateRun: "2000-01-23T04:56:07.000+00:00",
        disabled: false,
        passed: true,
        skipped: false
      },
      {
        log: "Test failed",
        SuiteRunId: "suite1Run1",
        testId: "test2",
        dateRun: "2000-01-22T04:56:07.000+00:00",
        disabled: false,
        passed: false,
        skipped: false
      }
    ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
};

/**
 * Options operation
 *
 * projectId String
 * suiteId String
 * testId String
 * no response value expected for this operation
 **/
exports.projectsProjectIdSuitesSuiteIdTestsTestIdEnableOPTIONS = function(
  projectId,
  suiteId,
  testId
) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
};

/**
 * Disables the test from running
 *
 * xAccessToken String
 * projectId String
 * suiteId String
 * testId String
 * returns List
 **/
exports.projectsProjectIdSuitesSuiteIdTestsTestIdEnablePOST = function(
  xAccessToken,
  projectId,
  suiteId,
  testId
) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples["application/json"] = [
      {
        log: "Test passed",
        SuiteRunId: "suite1Run2",
        testId: "test1",
        dateRun: "2000-01-23T04:56:07.000+00:00",
        disabled: false,
        passed: true,
        skipped: false
      },
      {
        log: "Test passed",
        SuiteRunId: "suiteRun1",
        testId: "test1",
        dateRun: "2000-01-23T04:56:07.000+00:00",
        disabled: false,
        passed: true,
        skipped: false
      }
    ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
};

/**
 * Options operation
 *
 * projectId String
 * suiteId String
 * testId String
 * no response value expected for this operation
 **/
exports.projectsProjectIdSuitesSuiteIdTestsTestIdRerunOPTIONS = function(
  projectId,
  suiteId,
  testId
) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
};

/**
 * Disables the test from running
 *
 * xAccessToken String
 * projectId String
 * suiteId String
 * testId String
 * returns List
 **/
exports.projectsProjectIdSuitesSuiteIdTestsTestIdRerunPOST = function(
  xAccessToken,
  projectId,
  suiteId,
  testId
) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples["application/json"] = [
      {
        log: "Test passed",
        SuiteRunId: "suiteRun1",
        testId: "test1",
        dateRun: "2000-01-23T04:56:07.000+00:00",
        disabled: false,
        passed: true,
        skipped: false
      },
      {
        log: "Test passed",
        SuiteRunId: "suiteRun1",
        testId: "test1",
        dateRun: "2000-01-23T04:56:07.000+00:00",
        disabled: false,
        passed: true,
        skipped: false
      }
    ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
};

/**
 * Gets the tests that have run for a given suite
 *
 * xAccessToken String
 * projectId String
 * suiteId String
 * testId String
 * returns List
 **/
exports.projectsProjectIdSuitesSuiteIdTestsTestIdTestRunsGET = function(
  xAccessToken,
  projectId,
  suiteId,
  testId
) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples["application/json"] = [
      {
        log: "Test passed",
        SuiteRunId: "suite1Run1",
        testId: "test1",
        dateRun: "2000-01-23T04:56:07.000+00:00",
        disabled: false,
        passed: true,
        skipped: false
      },
      {
        log: "Test failed",
        SuiteRunId: "suite1Run2",
        testId: "test2",
        dateRun: "2000-01-22T04:56:07.000+00:00",
        disabled: false,
        passed: false,
        skipped: false
      }
    ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
};

/**
 * Options operation
 *
 * projectId String
 * suiteId String
 * testId String
 * no response value expected for this operation
 **/
exports.projectsProjectIdSuitesSuiteIdTestsTestIdTestRunsOPTIONS = function(
  projectId,
  suiteId,
  testId
) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
};

/**
 * Options operation
 *
 * no response value expected for this operation
 **/
exports.usersLoginOPTIONS = function() {
  return new Promise(function(resolve, reject) {
    resolve();
  });
};

/**
 * Logs in a user so they can see their projects.
 *
 * user Users
 * returns String
 **/
exports.usersLoginPOST = function(user) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples["application/json"] = '"sampleToken"';
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
};

/**
 * Options operation
 *
 * no response value expected for this operation
 **/
exports.usersLogoutOPTIONS = function() {
  return new Promise(function(resolve, reject) {
    resolve();
  });
};

/**
 * Logs a user out.
 *
 * xAccessToken String
 * no response value expected for this operation
 **/
exports.usersLogoutPOST = function(xAccessToken) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
};

/**
 * Options operation
 *
 * no response value expected for this operation
 **/
exports.usersOPTIONS = function() {
  return new Promise(function(resolve, reject) {
    resolve();
  });
};

/**
 * Creates a user and authorizes that user for a list of projects.
 *
 * xAccessToken String
 * user Users
 * returns Users
 **/
exports.usersPOST = function(xAccessToken, user) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples["application/json"] = {
      password: "password",
      admin: true,
      username: "username",
      authorizedProjects: "authorizedProjects"
    };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
};

/**
 * Deletes a user.
 *
 * xAccessToken String
 * username String
 * no response value expected for this operation
 **/
exports.usersUsernameDELETE = function(xAccessToken, username) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
};

/**
 * Options operation
 *
 * username String
 * no response value expected for this operation
 **/
exports.usersUsernameOPTIONS = function(username) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
};

/**
 * Updates a user's password, admin status, or list of projects.
 *
 * xAccessToken String
 * username String
 * user Users
 * returns Users
 **/
exports.usersUsernamePUT = function(xAccessToken, username, user) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples["application/json"] = {
      password: "password",
      admin: true,
      username: "username",
      authorizedProjects: "authorizedProjects"
    };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
};
