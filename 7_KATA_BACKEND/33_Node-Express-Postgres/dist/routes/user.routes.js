"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _user = require("../controllers/user.controller");

//Importing controllers
var router = (0, _express.Router)(); //console.log(router);
//  api/users

router.post("/", _user.postUser); //  api/users/

router.get("/:idUser", _user.getOneUser); //  api/users/

router.get("/", _user.getUsers); //  api/users/

router.put("/:idUser", _user.updateOneUser);
router["delete"]("/:idUser", _user.deleteOneUser);
var _default = router;
exports["default"] = _default;