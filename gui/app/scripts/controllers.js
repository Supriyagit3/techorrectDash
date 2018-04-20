"use strict";

angular
  .module("techorrectDash")

  .controller("HomeController", [
    "$scope",
    "$http",
    "ProjectFactory",
    function($scope, $http, ProjectFactory) {
      $scope.showProjects = false;
      $scope.projectsMessage = "Loading ...";
      $http.defaults.headers.common["x-access-token"] = "foo";
      $scope.projects = ProjectFactory.query(
        function(response) {
          $scope.projects = response;
          $scope.showProjects = true;
        },
        function(response) {
          $scope.projectsMessage =
            "Error: " + response.status + " " + response.statusText;
        }
      );
    }
  ])

  .controller("ProjectController", [
    "$scope",
    "$stateParams",
    "$http",
    "SuiteFactory",
    function($scope, $stateParams, $http, SuiteFactory) {
      $scope.suites = {};
      $scope.showSuites = false;
      $scope.suiteMessage = "Loading ...";
      $http.defaults.headers.common["x-access-token"] = "foo";
      $scope.dish = SuiteFactory.query(
        { projectId: $stateParams.projectId },
        function(response) {
          $scope.suites = response;
          $scope.showSuites = true;
        },
        function(response) {
          $scope.suiteMessage =
            "Error: " + response.status + " " + response.statusText;
        }
      );
    }
  ])

  .controller("SuiteController", [
    "$scope",
    "$stateParams",
    "$http",
    "TestFactory",
    function($scope, $stateParams, $http, TestFactory) {
      $scope.tests = {};
      $scope.showTests = false;
      $scope.testMessage = "Loading ...";
      $http.defaults.headers.common["x-access-token"] = "foo";
      $scope.dish = TestFactory.query(
        { projectId: $stateParams.projectId, suiteId: $stateParams.suiteId },
        function(response) {
          $scope.tests = response;
          $scope.showTests = true;
        },
        function(response) {
          $scope.testMessage =
            "Error: " + response.status + " " + response.statusText;
        }
      );
    }
  ])

  .controller("TestController", [
    "$scope",
    "$stateParams",
    "$http",
    "TestRunFactory",
    function($scope, $stateParams, $http, TestRunFactory) {
      $scope.testRuns = {};
      $scope.showTestRuns = false;
      $scope.testRunMessage = "Loading ...";
      $http.defaults.headers.common["x-access-token"] = "foo";
      $scope.dish = TestRunFactory.query(
        {
          projectId: $stateParams.projectId,
          suiteId: $stateParams.suiteId,
          testId: $stateParams.testId
        },
        function(response) {
          $scope.testRuns = response;
          $scope.showTestRuns = true;
        },
        function(response) {
          $scope.testRunMessage =
            "Error: " + response.status + " " + response.statusText;
        }
      );
    }
  ])

  .controller("SuiteHistoryController", [
    "$scope",
    "$stateParams",
    "$http",
    "SuiteRunFactory",
    function($scope, $stateParams, $http, SuiteRunFactory) {
      $scope.suiteRuns = {};
      $scope.showSuiteRuns = false;
      $scope.suiteRunMessage = "Loading ...";
      $http.defaults.headers.common["x-access-token"] = "foo";
      $scope.dish = SuiteRunFactory.query(
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
      };

      $rootScope.$on("login:Successful", function() {
        $scope.loggedIn = AuthFactory.isAuthenticated();
        $scope.username = AuthFactory.getUsername();
      });

      $rootScope.$on("registration:Successful", function() {
        $scope.loggedIn = AuthFactory.isAuthenticated();
        $scope.username = AuthFactory.getUsername();
      });

      $scope.stateis = function(curstate) {
        return $state.is(curstate);
      };
    }
  ])

  .controller("LoginController", [
    "$scope",
    "ngDialog",
    "$window",
    "AuthFactory",
    function($scope, ngDialog, $window, AuthFactory) {
      $scope.loginData = $window.localStorage.getObject("userinfo", "{}");

      $scope.doLogin = function() {
        if ($scope.rememberMe) {
          $window.localStorage.storeObject("userinfo", $scope.loginData);
        }
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

// .controller("RegisterController", [
//   "$scope",
//   "ngDialog",
//   "$localStorage",
//   "AuthFactory",
//   function($scope, ngDialog, $localStorage, AuthFactory) {
//     $scope.register = {};
//     $scope.loginData = {};
//
//     $scope.doRegister = function() {
//       console.log("Doing registration", $scope.registration);
//
//       AuthFactory.register($scope.registration);
//
//       ngDialog.close();
//     };
//   }
// ])
//
// .controller("MenuController", [
//   "$scope",
//   "menuFactory",
//   function($scope, menuFactory) {
//     $scope.tab = 1;
//     $scope.filtText = "";
//     $scope.showDetails = false;
//     $scope.showMenu = false;
//     $scope.menuMessage = "Loading ...";
//
//     $scope.dishes = menuFactory.getDishes().query(
//       function(response) {
//         $scope.dishes = response;
//         $scope.showMenu = true;
//       },
//       function(response) {
//         $scope.menuMessage =
//           "Error: " + response.status + " " + response.statusText;
//       }
//     );
//
//     $scope.select = function(setTab) {
//       $scope.tab = setTab;
//
//       if (setTab === 2) {
//         $scope.filtText = "appetizer";
//       } else if (setTab === 3) {
//         $scope.filtText = "mains";
//       } else if (setTab === 4) {
//         $scope.filtText = "dessert";
//       } else {
//         $scope.filtText = "";
//       }
//     };
//
//     $scope.isSelected = function(checkTab) {
//       return $scope.tab === checkTab;
//     };
//
//     $scope.toggleDetails = function() {
//       $scope.showDetails = !$scope.showDetails;
//     };
//   }
// ])
//
// .controller("ContactController", [
//   "$scope",
//   function($scope) {
//     $scope.feedback = {
//       mychannel: "",
//       firstName: "",
//       lastName: "",
//       agree: false,
//       email: ""
//     };
//
//     var channels = [
//       {
//         value: "tel",
//         label: "Tel."
//       },
//       {
//         value: "Email",
//         label: "Email"
//       }
//     ];
//
//     $scope.channels = channels;
//     $scope.invalidChannelSelection = false;
//   }
// ])
//
// .controller("FeedbackController", [
//   "$scope",
//   "feedbackFactory",
//   function($scope, feedbackFactory) {
//     $scope.sendFeedback = function() {
//       console.log($scope.feedback);
//
//       if ($scope.feedback.agree && $scope.feedback.mychannel === "") {
//         $scope.invalidChannelSelection = true;
//         console.log("incorrect");
//       } else {
//         $scope.invalidChannelSelection = false;
//
//         feedbackFactory.feedback().save($scope.feedback);
//
//         $scope.feedback = {
//           mychannel: "",
//           firstName: "",
//           lastName: "",
//           agree: false,
//           email: ""
//         };
//         $scope.feedback.mychannel = "";
//         $scope.feedbackForm.$setPristine();
//         console.log($scope.feedback);
//       }
//     };
//   }
// ])
//
// .controller("DishDetailController", [
//   "$scope",
//   "$stateParams",
//   "menuFactory",
//   function($scope, $stateParams, menuFactory) {
//     $scope.dish = {};
//     $scope.showDish = false;
//     $scope.dishMessage = "Loading ...";
//     $scope.dish = menuFactory
//       .getDishes()
//       .get({
//         id: parseInt($stateParams.id, 10)
//       })
//       .$promise.then(
//         function(response) {
//           $scope.dish = response;
//           $scope.showDish = true;
//         },
//         function(response) {
//           $scope.dishMessage =
//             "Error: " + response.status + " " + response.statusText;
//         }
//       );
//   }
// ])
//
// .controller("DishCommentController", [
//   "$scope",
//   "menuFactory",
//   function($scope, menuFactory) {
//     $scope.mycomment = {
//       rating: 5,
//       comment: "",
//       author: "",
//       date: ""
//     };
//
//     $scope.submitComment = function() {
//       $scope.newComment.date = new Date().toISOString();
//       console.log($scope.newComment);
//       $scope.dish.comments.push($scope.newComment);
//
//       menuFactory.getDishes().update(
//         {
//           id: $scope.dish.id
//         },
//         $scope.dish
//       );
//
//       $scope.commentForm.$setPristine();
//
//       $scope.newComment = {
//         rating: 5,
//         comment: "",
//         author: "",
//         date: ""
//       };
//     };
//   }
// ])
//
// // implement the IndexController and About Controller here
//
// .controller("AboutController", [
//   "$scope",
//   "corporateFactory",
//   function($scope, corporateFactory) {
//     $scope.showLeadership = false;
//     $scope.leadershipMessage = "Loading ...";
//     $scope.leadership = corporateFactory
//       .getLeaders()
//       .query()
//       .$promise.then(
//         function(response) {
//           $scope.leadership = response;
//           $scope.showLeadership = true;
//         },
//         function(response) {
//           $scope.leadershipMessage =
//             "Error: " + response.status + " " + response.statusText;
//         }
//       );
//   }
// ])
