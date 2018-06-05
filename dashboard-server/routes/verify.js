var User = require("../models/user");
var jwt = require("jsonwebtoken"); // used to create, sign, and verify tokens
var config = require("../config.js");

exports.getToken = function(user) {
  return config.secretKey
    .then(function(key) {
      return Promise.resolve(jwt.sign(user, key, {
        expiresIn: 3600
      }));
    })
    .catch(function(err) { console.error('verify.js getToken config.secretKey Error: ' + err.message); });
};

exports.verifyOrdinaryUser = function(req, res, next) {
  // check header or url parameters or post parameters for token
  var token =
    req.body.token || req.query.token || req.headers["x-access-token"];

  // decode token
  if (token) {
    config.secretKey
      .then(function(key) {
        // verifies secret and checks exp
        jwt.verify(token, key, function(err, decoded) {
          if (err) {
            var err1 = new Error("You are not authenticated!");
            err1.status = 401;
            return next(err1);
          } else {
            // if everything is good, save to request for use in other routes
            req.decoded = decoded;
            next();
          }
        });
      })
    .catch(function(err) { console.error('verify.js verifyOrdinaryUser config.secretKey Error: ' + err.message); });
  } else {
    // if there is no token
    // return an error
    var err2 = new Error("No token provided!");
    err2.status = 403;
    return next(err2);
  }
};

exports.verifyAdmin = function(req, res, next) {
  if (req.decoded.admin) {
    next();
  } else {
    var err1 = new Error("You are not authenticated!");
    err1.status = 401;
    return next(err1);
  }
};
