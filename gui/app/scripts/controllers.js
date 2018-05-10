"use strict";

angular
  .module("techorrectDash")

  .controller("HomeController", [
    "$scope",
    "ProjectFactory",
    function($scope, ProjectFactory) {
      $scope.showProjects = false;
      $scope.projectsMessage = "Loading ...";
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
    "SuiteFactory",
    "ProjectFactory",
    function($scope, $stateParams, SuiteFactory, ProjectFactory) {
      $scope.project = ProjectFactory.get(
        { projectId: $stateParams.projectId },
        function(response) {
          $scope.project = response;
        },
        function(response) {
          $scope.suiteMessage =
            "Error: " + response.status + " " + response.statusText;
        }
      );

      $scope.suites = {};
      $scope.showSuites = false;
      $scope.suiteMessage = "Loading ...";
      $scope.suites = SuiteFactory.query(
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
    "TestFactory",
    "SuiteFactory",
    "ProjectFactory",
    function($scope, $stateParams, TestFactory, SuiteFactory, ProjectFactory) {
      $scope.project = ProjectFactory.get(
        { projectId: $stateParams.projectId },
        function(response) {
          $scope.project = response;
        },
        function(response) {
          $scope.testMessage =
            "Error: " + response.status + " " + response.statusText;
        }
      );

      $scope.suite = SuiteFactory.get(
        {
          projectId: $stateParams.projectId,
          suiteId: $stateParams.suiteId
        },
        function(response) {
          $scope.suite = response;
        },
        function(response) {
          $scope.testMessage =
            "Error: " + response.status + " " + response.statusText;
        }
      );

      getTests = function() {
        $scope.showTests = false;
        $scope.testMessage = "Loading ...";
        $scope.tests = TestFactory.get(
          {
            projectId: $stateParams.projectId,
            suiteId: $stateParams.suiteId,
            page: $scope.currentPage,
            perPage: $scope.perPage
          },
          function(response) {
            $scope.tests = response.tests;
            $scope.currentPage = response.current;
            $scope.totalPages = response.pages;
            $scope.showTests = true;
          },
          function(response) {
            $scope.testMessage =
              "Error: " + response.status + " " + response.statusText;
          }
        );
      };

      //Pagination vars
      $scope.currentPage = 1;
      $scope.perPage = 25;
      $scope.maxSize = 10;
      $scope.totalPages = 1;
      $scope.listMin = $scope.currentPage;
      $scope.listMax = $scope.listMin + $scope.maxSize - 1;

      $scope.tests = {};
      getTests();

      $scope.rerun = function(testId) {
        console.log("Rerun test id:" + testId);
      };

      $scope.disable = function(testId) {
        console.log("Disable test id: " + testId);
      };

      $scope.range = function(min, max, step) {
        console.log(min + max + step);
        if (!step) {
          step = 1;
        }
        var range = [];
        for (var i = min; i <= max; i += step) {
          range.push(i);
        }
        return range;
      };

      $scope.goToPage = function(page) {
        $scope.currentPage = page;
        $scope.perPage = 25;

        getTests();
      };

      $scope.next10pages = function() {
        $scope.currentPage = $scope.listMin + $scope.maxSize;
        $scope.listMin = $scope.listMin + $scope.maxSize;
        $scope.listMax = $scope.listMax + $scope.maxSize;
        $scope.perPage = 25;

        getTests();
      };

      $scope.prev10pages = function() {
        $scope.currentPage = $scope.listMin - 1;
        $scope.listMin = $scope.listMin - $scope.maxSize;
        $scope.listMax = $scope.listMax - $scope.maxSize;
        $scope.perPage = 25;

        getTests();
      };
    }
  ])

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
      $scope.project = ProjectFactory.get(
        { projectId: $stateParams.projectId },
        function(response) {
          $scope.project = response;
        },
        function(response) {
          $scope.testRunMessage =
            "Error: " + response.status + " " + response.statusText;
        }
      );

      $scope.suite = SuiteFactory.get(
        {
          projectId: $stateParams.projectId,
          suiteId: $stateParams.suiteId
        },
        function(response) {
          $scope.suite = response;
        },
        function(response) {
          $scope.testRunMessage =
            "Error: " + response.status + " " + response.statusText;
        }
      );

      $scope.test = TestFactory.get(
        {
          projectId: $stateParams.projectId,
          suiteId: $stateParams.suiteId,
          testId: $stateParams.testId
        },
        function(response) {
          $scope.test = response;
        },
        function(response) {
          $scope.testRunMessage =
            "Error: " + response.status + " " + response.statusText;
        }
      );

      $scope.testRuns = {};
      $scope.showTestRuns = false;
      $scope.testRunMessage = "Loading ...";
      $scope.testRuns = TestRunFactory.query(
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
      $scope.loginData = $window.localStorage.getItem("userinfo");

      $scope.doLogin = function() {
        if ($scope.rememberMe) {
          $window.localStorage.setItem("userinfo", $scope.loginData);
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
