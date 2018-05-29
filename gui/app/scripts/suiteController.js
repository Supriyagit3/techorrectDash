"use strict";

angular
  .module("techorrectDash")

  .controller("SuiteController", [
    "$scope",
    "$stateParams",
    "TestFactory",
    "SuiteFactory",
    "ProjectFactory",
    function($scope, $stateParams, TestFactory, SuiteFactory, ProjectFactory) {
      getProjectByID($scope, ProjectFactory, $stateParams.projectId);
      getSuiteById(
        $scope,
        SuiteFactory,
        $stateParams.projectId,
        $stateParams.suiteId
      );

      paginationFunctions.initializePaginationVars($scope);

      $scope.tests = {};

      $scope.getTestsNoScope = function(
        currentPage,
        perPage,
        listMin,
        listMax,
        maxSize
      ) {
        getTests(
          $scope,
          $stateParams.projectId,
          $stateParams.suiteId,
          TestFactory,
          currentPage,
          perPage,
          listMin,
          listMax,
          maxSize
        );
      };

      $scope.getTestsNoScope(
        $scope.currentPage,
        $scope.perPage,
        $scope.listMin,
        $scope.listMax,
        $scope.maxSize
      );

      $scope.rerun = function(testId) {
        console.log("Rerun test id:" + testId);
      };

      $scope.disable = function(testId) {
        console.log("Disable test id: " + testId);
      };
    }
  ]);
