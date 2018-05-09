'use strict';

var utils = require('../utils/writer.js');
var Default = require('../service/DefaultService');

module.exports.projectsGET = function projectsGET (req, res, next) {
  var xAccessToken = req.swagger.params['x-access-token'].value;
  Default.projectsGET(xAccessToken)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.projectsOPTIONS = function projectsOPTIONS (req, res, next) {
  Default.projectsOPTIONS()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.projectsProjectIdSuitesGET = function projectsProjectIdSuitesGET (req, res, next) {
  var xAccessToken = req.swagger.params['x-access-token'].value;
  var projectId = req.swagger.params['projectId'].value;
  var prevRuns = req.swagger.params['prevRuns'].value;
  Default.projectsProjectIdSuitesGET(xAccessToken,projectId,prevRuns)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.projectsProjectIdSuitesOPTIONS = function projectsProjectIdSuitesOPTIONS (req, res, next) {
  var projectId = req.swagger.params['projectId'].value;
  Default.projectsProjectIdSuitesOPTIONS(projectId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.projectsProjectIdSuitesSuiteIdSuiteRunIdTestRunsGET = function projectsProjectIdSuitesSuiteIdSuiteRunIdTestRunsGET (req, res, next) {
  var projectId = req.swagger.params['projectId'].value;
  var suiteId = req.swagger.params['suiteId'].value;
  var suiteRunId = req.swagger.params['suiteRunId'].value;
  Default.projectsProjectIdSuitesSuiteIdSuiteRunIdTestRunsGET(projectId,suiteId,suiteRunId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.projectsProjectIdSuitesSuiteIdSuiteRunIdTestRunsOPTIONS = function projectsProjectIdSuitesSuiteIdSuiteRunIdTestRunsOPTIONS (req, res, next) {
  var projectId = req.swagger.params['projectId'].value;
  var suiteId = req.swagger.params['suiteId'].value;
  var suiteRunId = req.swagger.params['suiteRunId'].value;
  Default.projectsProjectIdSuitesSuiteIdSuiteRunIdTestRunsOPTIONS(projectId,suiteId,suiteRunId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.projectsProjectIdSuitesSuiteIdTestsGET = function projectsProjectIdSuitesSuiteIdTestsGET (req, res, next) {
  var xAccessToken = req.swagger.params['x-access-token'].value;
  var projectId = req.swagger.params['projectId'].value;
  var suiteId = req.swagger.params['suiteId'].value;
  Default.projectsProjectIdSuitesSuiteIdTestsGET(xAccessToken,projectId,suiteId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.projectsProjectIdSuitesSuiteIdTestsOPTIONS = function projectsProjectIdSuitesSuiteIdTestsOPTIONS (req, res, next) {
  var projectId = req.swagger.params['projectId'].value;
  var suiteId = req.swagger.params['suiteId'].value;
  Default.projectsProjectIdSuitesSuiteIdTestsOPTIONS(projectId,suiteId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.projectsProjectIdSuitesSuiteIdTestsTestIdDisableOPTIONS = function projectsProjectIdSuitesSuiteIdTestsTestIdDisableOPTIONS (req, res, next) {
  var projectId = req.swagger.params['projectId'].value;
  var suiteId = req.swagger.params['suiteId'].value;
  var testId = req.swagger.params['testId'].value;
  Default.projectsProjectIdSuitesSuiteIdTestsTestIdDisableOPTIONS(projectId,suiteId,testId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.projectsProjectIdSuitesSuiteIdTestsTestIdDisablePOST = function projectsProjectIdSuitesSuiteIdTestsTestIdDisablePOST (req, res, next) {
  var xAccessToken = req.swagger.params['x-access-token'].value;
  var projectId = req.swagger.params['projectId'].value;
  var suiteId = req.swagger.params['suiteId'].value;
  var testId = req.swagger.params['testId'].value;
  var prevRuns = req.swagger.params['prevRuns'].value;
  Default.projectsProjectIdSuitesSuiteIdTestsTestIdDisablePOST(xAccessToken,projectId,suiteId,testId,prevRuns)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.projectsProjectIdSuitesSuiteIdTestsTestIdEnableOPTIONS = function projectsProjectIdSuitesSuiteIdTestsTestIdEnableOPTIONS (req, res, next) {
  var projectId = req.swagger.params['projectId'].value;
  var suiteId = req.swagger.params['suiteId'].value;
  var testId = req.swagger.params['testId'].value;
  Default.projectsProjectIdSuitesSuiteIdTestsTestIdEnableOPTIONS(projectId,suiteId,testId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.projectsProjectIdSuitesSuiteIdTestsTestIdEnablePOST = function projectsProjectIdSuitesSuiteIdTestsTestIdEnablePOST (req, res, next) {
  var xAccessToken = req.swagger.params['x-access-token'].value;
  var projectId = req.swagger.params['projectId'].value;
  var suiteId = req.swagger.params['suiteId'].value;
  var testId = req.swagger.params['testId'].value;
  Default.projectsProjectIdSuitesSuiteIdTestsTestIdEnablePOST(xAccessToken,projectId,suiteId,testId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.projectsProjectIdSuitesSuiteIdTestsTestIdRerunOPTIONS = function projectsProjectIdSuitesSuiteIdTestsTestIdRerunOPTIONS (req, res, next) {
  var projectId = req.swagger.params['projectId'].value;
  var suiteId = req.swagger.params['suiteId'].value;
  var testId = req.swagger.params['testId'].value;
  Default.projectsProjectIdSuitesSuiteIdTestsTestIdRerunOPTIONS(projectId,suiteId,testId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.projectsProjectIdSuitesSuiteIdTestsTestIdRerunPOST = function projectsProjectIdSuitesSuiteIdTestsTestIdRerunPOST (req, res, next) {
  var xAccessToken = req.swagger.params['x-access-token'].value;
  var projectId = req.swagger.params['projectId'].value;
  var suiteId = req.swagger.params['suiteId'].value;
  var testId = req.swagger.params['testId'].value;
  Default.projectsProjectIdSuitesSuiteIdTestsTestIdRerunPOST(xAccessToken,projectId,suiteId,testId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.projectsProjectIdSuitesSuiteIdTestsTestIdTestRunsGET = function projectsProjectIdSuitesSuiteIdTestsTestIdTestRunsGET (req, res, next) {
  var xAccessToken = req.swagger.params['x-access-token'].value;
  var projectId = req.swagger.params['projectId'].value;
  var suiteId = req.swagger.params['suiteId'].value;
  var testId = req.swagger.params['testId'].value;
  Default.projectsProjectIdSuitesSuiteIdTestsTestIdTestRunsGET(xAccessToken,projectId,suiteId,testId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.projectsProjectIdSuitesSuiteIdTestsTestIdTestRunsOPTIONS = function projectsProjectIdSuitesSuiteIdTestsTestIdTestRunsOPTIONS (req, res, next) {
  var projectId = req.swagger.params['projectId'].value;
  var suiteId = req.swagger.params['suiteId'].value;
  var testId = req.swagger.params['testId'].value;
  Default.projectsProjectIdSuitesSuiteIdTestsTestIdTestRunsOPTIONS(projectId,suiteId,testId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.usersLoginOPTIONS = function usersLoginOPTIONS (req, res, next) {
  Default.usersLoginOPTIONS()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.usersLoginPOST = function usersLoginPOST (req, res, next) {
  var user = req.swagger.params['user'].value;
  Default.usersLoginPOST(user)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.usersLogoutOPTIONS = function usersLogoutOPTIONS (req, res, next) {
  Default.usersLogoutOPTIONS()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.usersLogoutPOST = function usersLogoutPOST (req, res, next) {
  var xAccessToken = req.swagger.params['x-access-token'].value;
  Default.usersLogoutPOST(xAccessToken)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.usersOPTIONS = function usersOPTIONS (req, res, next) {
  Default.usersOPTIONS()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.usersPOST = function usersPOST (req, res, next) {
  var xAccessToken = req.swagger.params['x-access-token'].value;
  var user = req.swagger.params['user'].value;
  Default.usersPOST(xAccessToken,user)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.usersUsernameDELETE = function usersUsernameDELETE (req, res, next) {
  var xAccessToken = req.swagger.params['x-access-token'].value;
  var username = req.swagger.params['username'].value;
  Default.usersUsernameDELETE(xAccessToken,username)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.usersUsernameOPTIONS = function usersUsernameOPTIONS (req, res, next) {
  var username = req.swagger.params['username'].value;
  Default.usersUsernameOPTIONS(username)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.usersUsernamePUT = function usersUsernamePUT (req, res, next) {
  var xAccessToken = req.swagger.params['x-access-token'].value;
  var username = req.swagger.params['username'].value;
  var user = req.swagger.params['user'].value;
  Default.usersUsernamePUT(xAccessToken,username,user)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
