"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getUsers = getUsers;
exports.getOneUser = getOneUser;
exports.postUser = postUser;
exports.updateOneUser = updateOneUser;
exports.deleteOneUser = deleteOneUser;

var _User = require("../models/User");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function getUsers(_x, _x2) {
  return _getUsers.apply(this, arguments);
}

function _getUsers() {
  _getUsers = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var allUsers;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _User.User.findAll({
              attributes: ["id", "name", "lastname"]
            });

          case 2:
            allUsers = _context.sent;
            res.status(200).json({
              response: "all users",
              data: allUsers
            });

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _getUsers.apply(this, arguments);
}

function getOneUser(_x3, _x4) {
  return _getOneUser.apply(this, arguments);
}

function _getOneUser() {
  _getOneUser = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var idUser, oneUser;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            idUser = req.params.idUser;
            _context2.prev = 1;
            _context2.next = 4;
            return _User.User.findOne({
              where: {
                id: idUser
              }
            });

          case 4:
            oneUser = _context2.sent;

            if (!(oneUser === null)) {
              _context2.next = 8;
              break;
            }

            res.status(404).json({
              response: "not found"
            });
            return _context2.abrupt("return");

          case 8:
            res.status(200).json({
              response: "This is the user",
              data: oneUser
            });
            _context2.next = 14;
            break;

          case 11:
            _context2.prev = 11;
            _context2.t0 = _context2["catch"](1);
            res.status(500).json({
              response: "Internal error server"
            });

          case 14:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[1, 11]]);
  }));
  return _getOneUser.apply(this, arguments);
}

function postUser(_x5, _x6) {
  return _postUser.apply(this, arguments);
}

function _postUser() {
  _postUser = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var _req$body, name, lastname, email, password, newUser;

    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _req$body = req.body, name = _req$body.name, lastname = _req$body.lastname, email = _req$body.email, password = _req$body.password; //console.log(name, lastname, email, password, "😀");

            _context3.prev = 1;
            _context3.next = 4;
            return _User.User.create({
              name: name,
              lastname: lastname,
              email: email,
              password: password
            }, {
              fields: ["name", "lastname", "email", "password"]
            });

          case 4:
            newUser = _context3.sent;
            res.status(200).json({
              response: "post succesfully",
              userCreated: newUser
            });
            _context3.next = 12;
            break;

          case 8:
            _context3.prev = 8;
            _context3.t0 = _context3["catch"](1);
            console.log(_context3.t0);
            res.status(500).json({
              response: "Internal error server",
              error: _context3.t0.parent.detail
            });

          case 12:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[1, 8]]);
  }));
  return _postUser.apply(this, arguments);
}

function updateOneUser(_x7, _x8) {
  return _updateOneUser.apply(this, arguments);
}

function _updateOneUser() {
  _updateOneUser = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var idUser, _req$body2, name, lastname, email, password, userToUpdate;

    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            idUser = req.params.idUser;
            _req$body2 = req.body, name = _req$body2.name, lastname = _req$body2.lastname, email = _req$body2.email, password = _req$body2.password;
            _context4.next = 4;
            return _User.User.findOne({
              where: {
                id: idUser
              }
            });

          case 4:
            userToUpdate = _context4.sent;
            _context4.next = 7;
            return userToUpdate.update({
              name: name,
              lastname: lastname,
              email: email,
              password: password
            });

          case 7:
            res.status(200).json({
              response: "user updated"
            });

          case 8:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return _updateOneUser.apply(this, arguments);
}

function deleteOneUser(_x9, _x10) {
  return _deleteOneUser.apply(this, arguments);
}

function _deleteOneUser() {
  _deleteOneUser = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {
    var idUser, countRow;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            idUser = req.params.idUser;
            _context5.prev = 1;
            _context5.next = 4;
            return _User.User.destroy({
              where: {
                id: idUser
              }
            });

          case 4:
            countRow = _context5.sent;

            if (countRow === 0) {
              res.status(404).json({
                response: "Not found"
              });
            } else {
              res.status(200).json({
                response: "User deleted",
                count: countRow
              });
            }

            _context5.next = 11;
            break;

          case 8:
            _context5.prev = 8;
            _context5.t0 = _context5["catch"](1);
            res.status(500).json({
              response: "Error"
            });

          case 11:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[1, 8]]);
  }));
  return _deleteOneUser.apply(this, arguments);
}