"use strict";

var paginationFunctions = {
  range: function(min, max, step) {
    if (!step) {
      step = 1;
    }
    var range = [];
    for (var i = min; i <= max; i += step) {
      range.push(i);
    }
    return range;
  },

  goToPage: function(
    currentPage,
    listMin,
    listMax,
    maxSize,
    perPage,
    page,
    callback
  ) {
    currentPage = page;

    callback(currentPage, perPage, listMin, listMax, maxSize);
  },

  next10pages: function(
    currentPage,
    listMin,
    listMax,
    maxSize,
    perPage,
    callback
  ) {
    currentPage = listMin + maxSize;
    listMin = currentPage;
    listMax = listMax + maxSize;

    callback(currentPage, perPage, listMin, listMax, maxSize);
  },

  prev10pages: function(
    currentPage,
    listMin,
    listMax,
    maxSize,
    perPage,
    callback
  ) {
    currentPage = listMin - 1;
    listMin = listMin - maxSize;
    listMax = listMax - maxSize;

    callback(currentPage, perPage, listMin, listMax, maxSize);
  },

  initializePaginationVars: function($scope) {
    //Pagination vars
    $scope.currentPage = 1;
    $scope.listMin = 1;
    $scope.listMax = 1;
    $scope.perPage = 15;
    $scope.maxSize = 10;
    $scope.totalPages = 0;

    $scope.range = paginationFunctions.range;
    $scope.goToPage = paginationFunctions.goToPage;
    $scope.next10pages = paginationFunctions.next10pages;
    $scope.prev10pages = paginationFunctions.prev10pages;
  },

  finalizePaginationVars: function($scope, perPage, listMin, listMax, maxSize) {
    $scope.perPage = perPage;
    $scope.listMin = listMin;
    $scope.listMax = Math.min(listMin + maxSize - 1, $scope.totalPages);
    $scope.maxSize = maxSize;
  }
};

getProjects = function(
  $scope,
  ProjectFactory,
  currentPage,
  perPage,
  listMin,
  listMax,
  maxSize
) {
  $scope.showProjects = false;
  $scope.projectsMessage = "Loading ...";

  $scope.projects = ProjectFactory.get(
    {
      page: currentPage,
      perPage: perPage
    },
    function(response) {
      $scope.projects = response.projects;

      $scope.projectChartLabels = ["Healthy Suites", "Unhealthy Suites"];
      $scope.projectChartColors = ["#00B8A9", "#F6416C"];
      $scope.projectChartOptions = {
        rotation: 1 * Math.PI,
        circumference: 1 * Math.PI
      };

      $scope.currentPage = response.current;
      $scope.totalPages = response.pages;
      $scope.showProjects = true;

      paginationFunctions.finalizePaginationVars(
        $scope,
        perPage,
        listMin,
        listMax,
        maxSize
      );
    },
    function(response) {
      $scope.projectsMessage =
        "Error: " + response.status + " " + response.statusText;
    }
  );
};

var getProjectByID = function($scope, ProjectFactory, projectId) {
  $scope.project = ProjectFactory.get(
    { projectId: projectId },
    function(response) {
      $scope.project = response;
    },
    function(response) {
      $scope.suiteMessage =
        "Error: " + response.status + " " + response.statusText;
    }
  );
};

var getSuites = function(
  $scope,
  projectId,
  SuiteFactory,
  currentPage,
  perPage,
  listMin,
  listMax,
  maxSize
) {
  $scope.showSuites = false;
  $scope.suiteMessage = "Loading ...";

  $scope.suites = SuiteFactory.get(
    {
      projectId: projectId,
      page: currentPage,
      perPage: perPage
    },
    function(response) {
      $scope.suites = response.suites;

      $scope.chartLabels = [
        "Passing Tests",
        "Failing Tests",
        "Skipped Tests",
        "Disabled Tests"
      ];
      $scope.chartColors = ["#00B8A9", "#F6416C", "#F8F3D4", "#FFDE7D"];
      $scope.chartOptions = {
        rotation: 1 * Math.PI,
        circumference: 1 * Math.PI
      };

      $scope.currentPage = response.current;
      $scope.totalPages = response.pages;
      $scope.showSuites = true;

      paginationFunctions.finalizePaginationVars(
        $scope,
        perPage,
        listMin,
        listMax,
        maxSize
      );
    },
    function(response) {
      $scope.suiteMessage =
        "Error: " + response.status + " " + response.statusText;
    }
  );
};

var getSuiteById = function($scope, SuiteFactory, projectId, suiteId) {
  $scope.suite = SuiteFactory.get(
    {
      projectId: projectId,
      suiteId: suiteId
    },
    function(response) {
      $scope.suite = response;
    },
    function(response) {
      $scope.testMessage =
        "Error: " + response.status + " " + response.statusText;
    }
  );
};

var getTests = function(
  $scope,
  projectId,
  suiteId,
  TestFactory,
  currentPage,
  perPage,
  listMin,
  listMax,
  maxSize
) {
  $scope.showTests = false;
  $scope.testMessage = "Loading ...";

  $scope.tests = TestFactory.get(
    {
      projectId: projectId,
      suiteId: suiteId,
      page: currentPage,
      perPage: perPage
    },
    function(response) {
      $scope.tests = response.tests;
      $scope.currentPage = response.current;
      $scope.totalPages = response.pages;
      $scope.showTests = true;

      paginationFunctions.finalizePaginationVars(
        $scope,
        perPage,
        listMin,
        listMax,
        maxSize
      );
    },
    function(response) {
      $scope.testMessage =
        "Error: " + response.status + " " + response.statusText;
    }
  );
};

var getTestById = function($scope, TestFactory, projectId, suiteId, testId) {
  $scope.test = TestFactory.get(
    {
      projectId: projectId,
      suiteId: suiteId,
      testId: testId
    },
    function(response) {
      $scope.test = response;
    },
    function(response) {
      $scope.testRunMessage =
        "Error: " + response.status + " " + response.statusText;
    }
  );
};

var getTestRuns = function(
  $scope,
  projectId,
  suiteId,
  testId,
  TestRunFactory,
  currentPage,
  perPage,
  listMin,
  listMax,
  maxSize
) {
  $scope.showTestRuns = false;
  $scope.testRunMessage = "Loading ...";

  $scope.testRuns = TestRunFactory.get(
    {
      projectId: projectId,
      suiteId: suiteId,
      testId: testId,
      page: currentPage,
      perPage: perPage
    },
    function(response) {
      $scope.testRuns = response.testRuns;
      $scope.currentPage = response.current;
      $scope.totalPages = response.pages;
      $scope.showTestRuns = true;

      paginationFunctions.finalizePaginationVars(
        $scope,
        perPage,
        listMin,
        listMax,
        maxSize
      );
    },
    function(response) {
      $scope.testRunMessage =
        "Error: " + response.status + " " + response.statusText;
    }
  );
};
