"use strict";

angular
  .module("techorrectDash")

  .controller("SuiteHistoryController", [
    "$scope",
    "$stateParams",
    "SuiteRunFactory",
    function($scope, $stateParams, SuiteRunFactory) {
      $scope.suiteRuns = {};
      $scope.showSuiteRuns = false;
      $scope.suiteRunMessage = "Loading ...";
      $scope.suiteRuns = SuiteRunFactory.query(
        {
          projectId: $stateParams.projectId,
          suiteId: $stateParams.suiteId,
          suiteRunId: $stateParams.suiteRunId
        },
        function(response) {
          $scope.suiteRuns = response;
          $scope.showSuiteRuns = true;
        },
        function(response) {
          $scope.suiteRunMessage =
            "Error: " + response.status + " " + response.statusText;
        }
      );
    }
  ])

  .controller("HeaderController", [
    "$scope",
    "$state",
    "$rootScope",
    "ngDialog",
    "AuthFactory",
    function($scope, $state, $rootScope, ngDialog, AuthFactory) {
      $scope.loggedIn = false;
      $scope.username = "";

      if (AuthFactory.isAuthenticated()) {
        $scope.loggedIn = true;
        $scope.username = AuthFactory.getUsername();
      }

      $scope.openLogin = function() {
        ngDialog.open({
          template: "views/login.html",
          scope: $scope,
          className: "ngdialog-theme-default",
          controller: "LoginController"
        });
      };

      $scope.logOut = function() {
        AuthFactory.logout();
        $scope.loggedIn = false;
        $scope.username = "";
        $state.reload();
      };

      $rootScope.$on("login:Successful", function() {
        $scope.loggedIn = AuthFactory.isAuthenticated();
        $scope.username = AuthFactory.getUsername();
      });

      $rootScope.$on("registration:Successful", function() {
        $scope.loggedIn = AuthFactory.isAuthenticated();
        $scope.username = AuthFactory.getUsername();
      });

      $scope.$on("ngDialog.closed", function() {
        $state.reload();
      });

      $scope.stateis = function(curstate) {
        return $state.is(curstate);
      };
    }
  ])

  .controller("LoginController", [
    "$state",
    "$scope",
    "ngDialog",
    "$localStorage",
    "AuthFactory",
    function($state, $scope, ngDialog, $localStorage, AuthFactory) {
      $scope.loginData = $localStorage.getObject("userinfo", "{}");

      $scope.doLogin = function() {
        if ($scope.rememberMe)
          $localStorage.storeObject("userinfo", $scope.loginData);

        AuthFactory.login($scope.loginData);

        ngDialog.close();
      };

      // $scope.openRegister = function() {
      //   ngDialog.open({
      //     template: "views/register.html",
      //     scope: $scope,
      //     className: "ngdialog-theme-default",
      //     controller: "RegisterController"
      //   });
      // };
    }
  ]);
