"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _task = require("../controllers/task.controller");

//Importing controllers
var router = (0, _express.Router)(); //  api/tasks

router.post("/", _task.postTask); //  api/tasks/

router.get("/:idTask", _task.getOneTask); //  api/tasks/

router.get("/", _task.getTasks); //  api/tasks/

router.put("/:idTask", _task.updateOneTask);
router["delete"]("/:idTask", _task.deleteOneTask);
var _default = router;
exports["default"] = _default;