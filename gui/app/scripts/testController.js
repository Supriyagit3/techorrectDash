"use strict";

angular
  .module("techorrectDash")

  .controller("TestController", [
    "$scope",
    "$stateParams",
    "TestRunFactory",
    "TestFactory",
    "SuiteFactory",
    "ProjectFactory",
    function(
      $scope,
      $stateParams,
      TestRunFactory,
      TestFactory,
      SuiteFactory,
      ProjectFactory
    ) {
      getProjectByID($scope, ProjectFactory, $stateParams.projectId);
      getSuiteById(
        $scope,
        SuiteFactory,
        $stateParams.projectId,
        $stateParams.suiteId
      );
      getTestById(
        $scope,
        SuiteFactory,
        $stateParams.projectId,
        $stateParams.suiteId,
        $stateParams.testId
      );

      paginationFunctions.initializePaginationVars($scope);

      $scope.testRuns = {};

      $scope.getTestRunsNoScope = function(
        currentPage,
        perPage,
        listMin,
        listMax,
        maxSize
      ) {
        getTestRuns(
          $scope,
          $stateParams.projectId,
          $stateParams.suiteId,
          $stateParams.testId,
          TestRunFactory,
          currentPage,
          perPage,
          listMin,
          listMax,
          maxSize
        );
      };

      $scope.getTestRunsNoScope(
        $scope.currentPage,
        $scope.perPage,
        $scope.listMin,
        $scope.listMax,
        $scope.maxSize
      );
    }
  ]);
