var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var mongoose = require("mongoose");
var passport = require("passport");
var cors = require("cors");

var corsOptions = {
  origin: /http\:\/\/192\.168\.2\..*\:[0-9]*/,
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var projectRouter = require("./routes/projectRouter");
var suiteRouter = require("./routes/suiteRouter");
var testRouter = require("./routes/testRouter");
var testRunRouter = require("./routes/testRunRouter");

var authenticate = require("./authenticate");
var vault = require("./vault");

var app = express();

//TODO: hide these secrets and config in a separate file or environment variables
var roleId = "blah blah blah blah";
var secretId = "blah blah blah blah";
var vaultURL = 'https://vault.techorrect.com:8200';
var mongoHost = 'localhost:27017';

vault.connect(vaultURL, roleId, secretId)
  .then(function(token) { 
    var usernameP = vault.read('dashboard/mongodb-username');
    var passwordP = vault.read('dashboard/mongodb-password');
    return Promise.all([usernameP, passwordP]);
  }).then(function([username, password]) { 
    var url =
      `mongodb://${username}:${password}@${mongoHost}/dashboard?authSource=admin`;
    mongoose.connect(url);
    var db = mongoose.connection;
    db.on("error", console.error.bind(console, "connection error:"));
    db.once("open", function() {
      // we're connected!
      console.log("Connected correctly to mongodb");
    });
    // console.log('username result: ' + username);
    // console.log('password result: ' + password);
  })
  .catch(function(err) { console.error('Error: ' + err.message); });


// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(cors(corsOptions));

app.use(express.static(path.join(__dirname, "public")));

// passport config
var User = require("./models/user");
app.use(passport.initialize());

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/projects", projectRouter);
app.use("/projects/:projectId/suites", suiteRouter);
app.use("/projects/:projectId/suites/:suiteId/tests", testRouter);
app.use(
  "/projects/:projectId/suites/:suiteId/:suiteRunId/testRuns",
  testRunRouter
);
app.use(
  "/projects/:projectId/suites/:suiteId/tests/:testId/testRuns",
  testRunRouter
);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
