"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _user = require("../controllers/user.controller");

var _auth = require("../lib/auth");

var _user2 = require("./../middlewares/user.middlewares");

//Importing controllers
var router = (0, _express.Router)(); //console.log(router);
//  api/users

router.post('/', _user2.validatePostUser, _user2.encryptPasswordUser, _user.postUserManual); //  api/users/
//router.get('/:idUser', getOneUser); //  api/users/

router.get('/', _auth.verifyToken, _user.getUsers); //  api/users/

router.put('/:idUser', _auth.verifyToken, _user.updateOneUser);
router["delete"]('/:idUser', _auth.verifyToken, _user.deleteOneUser);
var _default = router;
exports["default"] = _default;