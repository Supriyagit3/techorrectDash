"use strict";

angular
  .module("techorrectDash")
  .constant("baseURL", "http://192.168.2.60:8080/dashboard/")

  .factory("ProjectFactory", [
    "$resource",
    "baseURL",
    function($resource, baseURL) {
      return $resource(baseURL + "projects", null, {
        update: {
          method: "PUT"
        }
      });
    }
  ])

  .factory("SuiteFactory", [
    "$resource",
    "baseURL",
    function($resource, baseURL) {
      return $resource(baseURL + "projects/:projectId/suites", null, {
        update: {
          method: "PUT"
        }
      });
    }
  ])

  .factory("TestFactory", [
    "$resource",
    "baseURL",
    function($resource, baseURL) {
      return $resource(
        baseURL + "projects/:projectId/suites/:suiteId/tests",
        null,
        {
          update: {
            method: "PUT"
          }
        }
      );
    }
  ])

  .factory("TestRunFactory", [
    "$resource",
    "baseURL",
    function($resource, baseURL) {
      return $resource(
        baseURL + "projects/:projectId/suites/:suiteId/tests/:testId/testRuns",
        null,
        {
          update: {
            method: "PUT"
          }
        }
      );
    }
  ])

  .factory("SuiteRunFactory", [
    "$resource",
    "baseURL",
    function($resource, baseURL) {
      return $resource(
        baseURL + "projects/:projectId/suites/:suiteId/:suiteRunId/testRuns",
        null,
        {
          update: {
            method: "PUT"
          }
        }
      );
    }
  ])

  .factory("AuthFactory", [
    "$resource",
    "$http",
    "$window",
    "$rootScope",
    "$window",
    "baseURL",
    "ngDialog",
    function($resource, $http, $window, $rootScope, baseURL, ngDialog) {
      var authFac = {};
      var TOKEN_KEY = "Token";
      var isAuthenticated = false;
      var username = "";
      var authToken;

      function useCredentials(credentials) {
        isAuthenticated = true;
        username = credentials.username;
        authToken = credentials.token;

        // Set the token as header for your requests!
        $http.defaults.headers.common["x-access-token"] = authToken;
      }

      function loadUserCredentials() {
        var credentials = $window.localStorage.getItem(TOKEN_KEY);
        if (credentials !== null) {
          useCredentials(credentials);
        }
      }

      function storeUserCredentials(credentials) {
        $window.localStorage.setItem(TOKEN_KEY, credentials);
        useCredentials(credentials);
      }

      function destroyUserCredentials() {
        authToken = undefined;
        username = "";
        isAuthenticated = false;
        $http.defaults.headers.common["x-access-token"] = authToken;
        $window.localStorage.removeItem(TOKEN_KEY);
      }

      authFac.login = function(loginData) {
        $resource(baseURL + "users/login").save(
          loginData,
          function(response) {
            storeUserCredentials({
              username: loginData.username,
              token: response.token
            });
            $rootScope.$broadcast("login:Successful");
          },
          function(response) {
            isAuthenticated = false;

            var message =
              '\
                  <div class="ngdialog-message">\
                  <div><h3>Login Unsuccessful</h3></div>' +
              "<div><p>" +
              response.data.err.message +
              "</p><p>" +
              response.data.err.name +
              "</p></div>" +
              '<div class="ngdialog-buttons">\
                      <button type="button" class="ngdialog-button ngdialog-button-primary" ng-click=confirm("OK")>OK</button>\
                  </div>';

            ngDialog.openConfirm({ template: message, plain: "true" });
          }
        );
      };

      authFac.logout = function() {
        $resource(baseURL + "users/logout").get(function(response) {
          return response;
        });
        destroyUserCredentials();
      };

      authFac.register = function(registerData) {
        $resource(baseURL + "users/register").save(
          registerData,
          function(response) {
            authFac.login({
              username: registerData.username,
              password: registerData.password
            });
            if (registerData.rememberMe) {
              $window.localStorage.storeObject("userinfo", {
                username: registerData.username,
                password: registerData.password
              });
            }

            $rootScope.$broadcast("registration:Successful");
            return response;
          },
          function(response) {
            var message =
              '\
                  <div class="ngdialog-message">\
                  <div><h3>Registration Unsuccessful</h3></div>' +
              "<div><p>" +
              response.data.err.message +
              "</p><p>" +
              response.data.err.name +
              "</p></div>";

            ngDialog.openConfirm({ template: message, plain: "true" });
          }
        );
      };

      authFac.isAuthenticated = function() {
        return isAuthenticated;
      };

      authFac.getUsername = function() {
        return username;
      };

      loadUserCredentials();

      return authFac;
    }
  ]);
