"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _morgan = _interopRequireDefault(require("morgan"));

var _path = _interopRequireDefault(require("path"));

var _user = _interopRequireDefault(require("./routes/user.routes"));

var _task = _interopRequireDefault(require("./routes/task.routes"));

var _userRoutes = _interopRequireDefault(require("./routes/user.routes.views"));

var _taskRoutes = _interopRequireDefault(require("./routes/task.routes.views"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//Importing modules
//Importing routes
var app = (0, _express["default"])();
app.use(_express["default"]["static"](__dirname + "/public")); //Middlewares

app.use(_express["default"].json());
app.use((0, _morgan["default"])("dev")); //Config view engine

app.set("view engine", "ejs");
app.set("views", _path["default"].join(__dirname, "views"));
app.engine("html", require("ejs").renderFile); //Routes views

app.get("/", function (req, res) {
  res.render("pages/home");
});
app.use("/users", _userRoutes["default"]);
app.use("/tasks", _taskRoutes["default"]); //Routes API

app.use("/api/users", _user["default"]);
app.use("/api/tasks", _task["default"]);
var _default = app;
exports["default"] = _default;