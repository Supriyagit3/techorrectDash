'use strict';

angular.module('confusionApp')

.controller('MenuController', ['$scope', 'menuFactory', function($scope, menuFactory) {

  $scope.tab = 1;
  $scope.filtText = '';
  $scope.showDetails = false;
  $scope.showMenu = false;
  $scope.menuMessage = "Loading ...";

  $scope.dishes = menuFactory.getDishes().query(function(response) {
      $scope.dishes = response;
      $scope.showMenu = true;
    },
    function(response) {
      $scope.menuMessage = "Error: " + response.status + " " + response.statusText;
    });


  $scope.select = function(setTab) {
    $scope.tab = setTab;

    if (setTab === 2) {
      $scope.filtText = "appetizer";
    } else if (setTab === 3) {
      $scope.filtText = "mains";
    } else if (setTab === 4) {
      $scope.filtText = "dessert";
    } else {
      $scope.filtText = "";
    }
  };

  $scope.isSelected = function(checkTab) {
    return ($scope.tab === checkTab);
  };

  $scope.toggleDetails = function() {
    $scope.showDetails = !$scope.showDetails;
  };
}])

.controller('ContactController', ['$scope', function($scope) {

  $scope.feedback = {
    mychannel: "",
    firstName: "",
    lastName: "",
    agree: false,
    email: ""
  };

  var channels = [{
    value: "tel",
    label: "Tel."
  }, {
    value: "Email",
    label: "Email"
  }];

  $scope.channels = channels;
  $scope.invalidChannelSelection = false;

}])

.controller('FeedbackController', ['$scope', 'feedbackFactory', function($scope, feedbackFactory) {

  $scope.sendFeedback = function() {

    console.log($scope.feedback);

    if ($scope.feedback.agree && ($scope.feedback.mychannel === "")) {
      $scope.invalidChannelSelection = true;
      console.log('incorrect');
    } else {
      $scope.invalidChannelSelection = false;

      feedbackFactory.feedback().save($scope.feedback);

      $scope.feedback = {
        mychannel: "",
        firstName: "",
        lastName: "",
        agree: false,
        email: ""
      };
      $scope.feedback.mychannel = "";
      $scope.feedbackForm.$setPristine();
      console.log($scope.feedback);
    }
  };
}])

.controller('DishDetailController', ['$scope', '$stateParams', 'menuFactory', function($scope, $stateParams, menuFactory) {

  $scope.dish = {};
  $scope.showDish = false;
  $scope.dishMessage = "Loading ...";
  $scope.dish = menuFactory.getDishes().get({
      id: parseInt($stateParams.id, 10)
    })
    .$promise.then(
      function(response) {
        $scope.dish = response;
        $scope.showDish = true;
      },
      function(response) {
        $scope.dishMessage = "Error: " + response.status + " " + response.statusText;
      }
    );

}])

.controller('DishCommentController', ['$scope', 'menuFactory', function($scope, menuFactory) {

  $scope.mycomment = {
    rating: 5,
    comment: "",
    author: "",
    date: ""
  };

  $scope.submitComment = function() {
    $scope.newComment.date = new Date().toISOString();
    console.log($scope.newComment);
    $scope.dish.comments.push($scope.newComment);

    menuFactory.getDishes().update({
      id: $scope.dish.id
    }, $scope.dish);

    $scope.commentForm.$setPristine();

    $scope.newComment = {
      rating: 5,
      comment: "",
      author: "",
      date: ""
    };
  };
}])

// implement the IndexController and About Controller here

.controller('AboutController', ['$scope', 'corporateFactory', function($scope, corporateFactory) {
  $scope.showLeadership = false;
  $scope.leadershipMessage = "Loading ...";
  $scope.leadership = corporateFactory.getLeaders().query()
    .$promise.then(
      function(response) {
        $scope.leadership = response;
        $scope.showLeadership = true;
      },
      function(response) {
        $scope.leadershipMessage = "Error: " + response.status + " " + response.statusText;
      }
    );
}])


.controller('IndexController', ['$scope', 'menuFactory', 'corporateFactory', function($scope, menuFactory, corporateFactory) {
  $scope.showDish = false;
  $scope.showPromotion = false;
  $scope.showExecChef = false;
  $scope.dishMessage = "Loading ...";
  $scope.promoMessage = "Loading ...";
  $scope.execChefMessage = "Loading ...";

  $scope.featuredDish = menuFactory.getDishes().get({
      id: 0
    })
    .$promise.then(
      function(response) {
        $scope.featuredDish = response;
        $scope.showDish = true;
      },
      function(response) {
        $scope.dishMessage = "Error: " + response.status + " " + response.statusText;
      }
    );

  $scope.promotion = menuFactory.getPromotion().get({
      id: 0
    })
    .$promise.then(
      function(response) {
        $scope.promotion = response;
        $scope.showPromotion = true;
      },
      function(response) {
        $scope.promoMessage = "Error: " + response.status + " " + response.statusText;
      }
    );

  $scope.execChef = corporateFactory.getLeaders().get({
      id: 3
    })
    .$promise.then(
      function(response) {
        $scope.execChef = response;
        $scope.showExecChef = true;
      },
      function(response) {
        $scope.execChefMessage = "Error: " + response.status + " " + response.statusText;
      }
    );
}]);
