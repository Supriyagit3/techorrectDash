"use strict";

angular
  .module("techorrectDash")

  .controller("ProjectController", [
    "$scope",
    "$stateParams",
    "SuiteFactory",
    "ProjectFactory",
    function($scope, $stateParams, SuiteFactory, ProjectFactory) {
      getProjectByID($scope, ProjectFactory, $stateParams.projectId);

      paginationFunctions.initializePaginationVars($scope);

      $scope.suites = {};

      $scope.getSuitesNoScope = function(
        currentPage,
        perPage,
        listMin,
        listMax,
        maxSize
      ) {
        getSuites(
          $scope,
          $stateParams.projectId,
          SuiteFactory,
          currentPage,
          perPage,
          listMin,
          listMax,
          maxSize
        );
      };

      $scope.getSuitesNoScope(
        $scope.currentPage,
        $scope.perPage,
        $scope.listMin,
        $scope.listMax,
        $scope.maxSize
      );
    }
  ]);
