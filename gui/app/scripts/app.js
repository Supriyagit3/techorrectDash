"use strict";

angular
  .module("techorrectDash", ["ui.router", "ngResource", "ngDialog"])
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider

      // route for the home page
      .state("app", {
        url: "/",
        views: {
          header: {
            templateUrl: "views/header.html",
            controller: "HeaderController"
          },
          content: {
            templateUrl: "views/home.html",
            controller: "HomeController"
          },
          footer: {
            templateUrl: "views/footer.html"
          }
        }
      })

      // route for the project page
      .state("app.project", {
        url: "projects/:projectId/",
        views: {
          "content@": {
            templateUrl: "views/project.html",
            controller: "ProjectController"
          }
        }
      })

      // route for the suite page
      .state("app.project.suite", {
        url: "suites/:suiteId/",
        views: {
          "content@": {
            templateUrl: "views/suite.html",
            controller: "SuiteController"
          }
        }
      })

      // route for the suite page
      .state("app.project.suite.test", {
        url: "tests/:testId/",
        views: {
          "content@": {
            templateUrl: "views/test.html",
            controller: "TestController"
          }
        }
      })

      // route for the suite page
      .state("app.project.suite.suiteHistory", {
        url: "history",
        views: {
          "content@": {
            templateUrl: "views/suiteHistory.html",
            controller: "SuiteHistoryController"
          }
        }
      });

    $urlRouterProvider.otherwise("/");
  });
