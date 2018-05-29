"use strict";

angular
  .module("techorrectDash")

  .controller("HomeController", [
    "$scope",
    "ProjectFactory",
    function($scope, ProjectFactory) {
      paginationFunctions.initializePaginationVars($scope);

      $scope.projects = {};

      $scope.getProjectsNoScope = function(
        currentPage,
        perPage,
        listMin,
        listMax,
        maxSize
      ) {
        getProjects(
          $scope,
          ProjectFactory,
          currentPage,
          perPage,
          listMin,
          listMax,
          maxSize
        );
      };

      $scope.getProjectsNoScope(
        $scope.currentPage,
        $scope.perPage,
        $scope.listMin,
        $scope.listMax,
        $scope.maxSize
      );
    }
  ]);
