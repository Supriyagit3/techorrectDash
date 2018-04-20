"use strict";

angular
  .module("confusionApp")
  .constant("baseURL", "http://localhost:5000/")

  .service("menuFactory", [
    "$resource",
    "baseURL",
    function($resource, baseURL) {
      this.getDishes = function() {
        return $resource(baseURL + "dishes/:id", null, {
          update: {
            method: "PUT"
          }
        });
      };

      // implement a function named getPromotion
      // that returns a selected promotion.

      this.getPromotion = function() {
        return $resource(baseURL + "promotions/:id", null);
      };
    }
  ])

  .factory("corporateFactory", [
    "$resource",
    "baseURL",
    function($resource, baseURL) {
      var corpfac = {};

      // Implement two functions, one named getLeaders,
      // the other named getLeader(index)
      // Remember this is a factory not a service

      corpfac.getLeaders = function() {
        return $resource(baseURL + "leadership/:id", null);
      };

      return corpfac;
    }
  ])

  .factory("feedbackFactory", [
    "$resource",
    "baseURL",
    function($resource, baseURL) {
      var feedFac = {};

      feedFac.feedback = function() {
        return $resource(baseURL + "feedback", null, {
          save: {
            method: "POST"
          }
        });
      };

      return feedFac;
    }
  ]);