'use strict';

var utils = require('../utils/writer.js');
var Default = require('../service/DefaultService');

module.exports.projectsGET = function projectsGET (req, res, next) {
  var xAccessToken = req.swagger.params['x-access-token'].value;
  var name = req.swagger.params['name'].value;
  Default.projectsGET(xAccessToken,name)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.projectsOPTIONS = function projectsOPTIONS (req, res, next) {
  var xAccessToken = req.swagger.params['x-access-token'].value;
  var projectId = req.swagger.params['projectId'].value;
  Default.projectsOPTIONS(xAccessToken,projectId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.projectsPOST = function projectsPOST (req, res, next) {
  var xAccessToken = req.swagger.params['x-access-token'].value;
  var project = req.swagger.params['project'].value;
  Default.projectsPOST(xAccessToken,project)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.projectsProjectIdDELETE = function projectsProjectIdDELETE (req, res, next) {
  var xAccessToken = req.swagger.params['x-access-token'].value;
  var projectId = req.swagger.params['projectId'].value;
  Default.projectsProjectIdDELETE(xAccessToken,projectId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.projectsProjectIdGET = function projectsProjectIdGET (req, res, next) {
  var projectId = req.swagger.params['projectId'].value;
  var xAccessToken = req.swagger.params['x-access-token'].value;
  Default.projectsProjectIdGET(projectId,xAccessToken)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.projectsProjectIdOPTIONS = function projectsProjectIdOPTIONS (req, res, next) {
  var projectId = req.swagger.params['projectId'].value;
  Default.projectsProjectIdOPTIONS(projectId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.projectsProjectIdPUT = function projectsProjectIdPUT (req, res, next) {
  var xAccessToken = req.swagger.params['x-access-token'].value;
  var projectId = req.swagger.params['projectId'].value;
  var project = req.swagger.params['project'].value;
  Default.projectsProjectIdPUT(xAccessToken,projectId,project)
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
  var name = req.swagger.params['name'].value;
  Default.projectsProjectIdSuitesGET(xAccessToken,projectId,prevRuns,name)
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

module.exports.projectsProjectIdSuitesPOST = function projectsProjectIdSuitesPOST (req, res, next) {
  var xAccessToken = req.swagger.params['x-access-token'].value;
  var projectId = req.swagger.params['projectId'].value;
  var suite = req.swagger.params['suite'].value;
  Default.projectsProjectIdSuitesPOST(xAccessToken,projectId,suite)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.projectsProjectIdSuitesSuiteIdDELETE = function projectsProjectIdSuitesSuiteIdDELETE (req, res, next) {
  var xAccessToken = req.swagger.params['x-access-token'].value;
  var projectId = req.swagger.params['projectId'].value;
  var suiteId = req.swagger.params['suiteId'].value;
  Default.projectsProjectIdSuitesSuiteIdDELETE(xAccessToken,projectId,suiteId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.projectsProjectIdSuitesSuiteIdGET = function projectsProjectIdSuitesSuiteIdGET (req, res, next) {
  var xAccessToken = req.swagger.params['x-access-token'].value;
  var projectId = req.swagger.params['projectId'].value;
  var suiteId = req.swagger.params['suiteId'].value;
  Default.projectsProjectIdSuitesSuiteIdGET(xAccessToken,projectId,suiteId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.projectsProjectIdSuitesSuiteIdOPTIONS = function projectsProjectIdSuitesSuiteIdOPTIONS (req, res, next) {
  var projectId = req.swagger.params['projectId'].value;
  var suiteId = req.swagger.params['suiteId'].value;
  Default.projectsProjectIdSuitesSuiteIdOPTIONS(projectId,suiteId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.projectsProjectIdSuitesSuiteIdPUT = function projectsProjectIdSuitesSuiteIdPUT (req, res, next) {
  var xAccessToken = req.swagger.params['x-access-token'].value;
  var projectId = req.swagger.params['projectId'].value;
  var suiteId = req.swagger.params['suiteId'].value;
  var suite = req.swagger.params['suite'].value;
  Default.projectsProjectIdSuitesSuiteIdPUT(xAccessToken,projectId,suiteId,suite)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.projectsProjectIdSuitesSuiteIdSuiteRunIdGET = function projectsProjectIdSuitesSuiteIdSuiteRunIdGET (req, res, next) {
  var xAccessToken = req.swagger.params['x-access-token'].value;
  var projectId = req.swagger.params['projectId'].value;
  var suiteId = req.swagger.params['suiteId'].value;
  var suiteRunId = req.swagger.params['suiteRunId'].value;
  Default.projectsProjectIdSuitesSuiteIdSuiteRunIdGET(xAccessToken,projectId,suiteId,suiteRunId)
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
  var name = req.swagger.params['name'].value;
  Default.projectsProjectIdSuitesSuiteIdTestsGET(xAccessToken,projectId,suiteId,name)
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

module.exports.projectsProjectIdSuitesSuiteIdTestsPOST = function projectsProjectIdSuitesSuiteIdTestsPOST (req, res, next) {
  var xAccessToken = req.swagger.params['x-access-token'].value;
  var projectId = req.swagger.params['projectId'].value;
  var suiteId = req.swagger.params['suiteId'].value;
  var test = req.swagger.params['test'].value;
  Default.projectsProjectIdSuitesSuiteIdTestsPOST(xAccessToken,projectId,suiteId,test)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.projectsProjectIdSuitesSuiteIdTestsTestIdDELETE = function projectsProjectIdSuitesSuiteIdTestsTestIdDELETE (req, res, next) {
  var projectId = req.swagger.params['projectId'].value;
  var suiteId = req.swagger.params['suiteId'].value;
  var testId = req.swagger.params['testId'].value;
  Default.projectsProjectIdSuitesSuiteIdTestsTestIdDELETE(projectId,suiteId,testId)
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

module.exports.projectsProjectIdSuitesSuiteIdTestsTestIdGET = function projectsProjectIdSuitesSuiteIdTestsTestIdGET (req, res, next) {
  var xAccessToken = req.swagger.params['x-access-token'].value;
  var projectId = req.swagger.params['projectId'].value;
  var suiteId = req.swagger.params['suiteId'].value;
  var testId = req.swagger.params['testId'].value;
  Default.projectsProjectIdSuitesSuiteIdTestsTestIdGET(xAccessToken,projectId,suiteId,testId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.projectsProjectIdSuitesSuiteIdTestsTestIdOPTIONS = function projectsProjectIdSuitesSuiteIdTestsTestIdOPTIONS (req, res, next) {
  var projectId = req.swagger.params['projectId'].value;
  var suiteId = req.swagger.params['suiteId'].value;
  var testId = req.swagger.params['testId'].value;
  Default.projectsProjectIdSuitesSuiteIdTestsTestIdOPTIONS(projectId,suiteId,testId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.projectsProjectIdSuitesSuiteIdTestsTestIdPUT = function projectsProjectIdSuitesSuiteIdTestsTestIdPUT (req, res, next) {
  var projectId = req.swagger.params['projectId'].value;
  var suiteId = req.swagger.params['suiteId'].value;
  var testId = req.swagger.params['testId'].value;
  var test = req.swagger.params['test'].value;
  Default.projectsProjectIdSuitesSuiteIdTestsTestIdPUT(projectId,suiteId,testId,test)
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

module.exports.projectsProjectIdSuitesSuiteIdTestsTestIdTestRunsPOST = function projectsProjectIdSuitesSuiteIdTestsTestIdTestRunsPOST (req, res, next) {
  var xAccessToken = req.swagger.params['x-access-token'].value;
  var projectId = req.swagger.params['projectId'].value;
  var suiteId = req.swagger.params['suiteId'].value;
  var testId = req.swagger.params['testId'].value;
  Default.projectsProjectIdSuitesSuiteIdTestsTestIdTestRunsPOST(xAccessToken,projectId,suiteId,testId)
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
