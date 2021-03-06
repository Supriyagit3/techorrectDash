var express = require("express");
var router = express.Router();
var passport = require("passport");
var User = require("../models/user");
var Verify = require("./verify");

/* GET users listing. */
router.get("/", Verify.verifyOrdinaryUser, Verify.verifyAdmin, function(
  req,
  res,
  next
) {
  User.find({}, function(err, user) {
    if (err) return next(err);
    res.json(user);
  });
});

router
  .route("/:username")
  .get(Verify.verifyOrdinaryUser, Verify.verifyAdmin, function(req, res, next) {
    User.findByUsername(req.params.username, function(err, user) {
      if (err) return next(err);
      res.json(user);
    });
  })
  .put(Verify.verifyOrdinaryUser, Verify.verifyAdmin, function(req, res, next) {
    User.findOneAndUpdate(
      { username: req.params.username },
      {
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        admin: req.body.admin,
        projects: req.body.projects
      },
      { new: true },
      function(err, user) {
        if (err) return next(err);
        res.json(user);
      }
    );
  });

router.post("/register", function(req, res) {
  User.register(
    new User({
      username: req.body.username,
      admin: req.body.admin,
      projects: req.body.projects
    }),
    req.body.password,
    function(err, user) {
      if (err) {
        return res.status(500).json({
          err: err
        });
      }
      if (req.body.firstname) {
        user.firstname = req.body.firstname;
      }
      if (req.body.lastname) {
        user.lastname = req.body.lastname;
      }
      passport.authenticate("local")(req, res, function() {
        return res.status(200).json({
          status: "Registration Successful!"
        });
      });
    }
  );
});

router.post("/login", function(req, res, next) {
  passport.authenticate("local", function(err, user, info) {
    if (err) {
      return next(err);
    }
    if (!user) {
      return res.status(401).json({
        err: info
      });
    }
    req.logIn(user, function(err) {
      if (err) {
        return res.status(500).json({
          err: "Could not log in user"
        });
      }

      Verify.getToken({
        username: user.username,
        _id: user._id,
        admin: user.admin,
        projects: user.projects
      })
        .then(function(token) {
          if (!token) {
            return res.status(500).json({
              err: "Token not generated"
            });
          }
          res.status(200).json({
            status: "Login successful!",
            success: true,
            token: token
          });
        })
        .catch(function(err) {
          console.error("users.js verify.getToken Error: " + err.message);
        });
    });
  })(req, res, next);
});

router.get("/logout", function(req, res) {
  req.logout();
  res.status(200).json({
    status: "Bye!"
  });
});

module.exports = router;
