var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var mongoose = require("mongoose");
var passport = require("passport");
var cors = require("cors");

var corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var projectRouter = require("./routes/projectRouter");
var suiteRouter = require("./routes/suiteRouter");
var testRouter = require("./routes/testRouter");
var testRunRouter = require("./routes/testRunRouter");

var authenticate = require("./authenticate");

var app = express();

var url =
  "mongodb://dashboardAdmin:dashPWD@sl-us-south-1-portal.29.dblayer.com:47652,sl-us-south-1-portal.28.dblayer.com:47652/dashboard?authSource=admin&ssl=true";
mongoose.connect(url);
var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
  // we're connected!
  console.log("Connected correctly to server");
});

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
