"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getUsers = getUsers;
exports.getOneUser = getOneUser;
exports.getOneUserByEmail = getOneUserByEmail;
exports.postUserManual = postUserManual;
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
            return _User.User.findAll();

          case 2:
            allUsers = _context.sent;
            res.status(200).json({
              response: 'all users',
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

function getOneUser(_x3) {
  return _getOneUser.apply(this, arguments);
}

function _getOneUser() {
  _getOneUser = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(idUser) {
    var oneUser;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return _User.User.findOne({
              where: {
                id: idUser
              }
            });

          case 3:
            oneUser = _context2.sent;

            if (!(oneUser === null)) {
              _context2.next = 6;
              break;
            }

            return _context2.abrupt("return");

          case 6:
            return _context2.abrupt("return", oneUser);

          case 9:
            _context2.prev = 9;
            _context2.t0 = _context2["catch"](0);
            return _context2.abrupt("return", _context2.t0);

          case 12:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 9]]);
  }));
  return _getOneUser.apply(this, arguments);
}

function getOneUserByEmail(_x4) {
  return _getOneUserByEmail.apply(this, arguments);
}

function _getOneUserByEmail() {
  _getOneUserByEmail = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(email) {
    var oneUser;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return _User.User.findOne({
              where: {
                email: email
              }
            });

          case 3:
            oneUser = _context3.sent;

            if (!(oneUser === null)) {
              _context3.next = 6;
              break;
            }

            return _context3.abrupt("return");

          case 6:
            return _context3.abrupt("return", oneUser);

          case 9:
            _context3.prev = 9;
            _context3.t0 = _context3["catch"](0);
            return _context3.abrupt("return", _context3.t0);

          case 12:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 9]]);
  }));
  return _getOneUserByEmail.apply(this, arguments);
}

function postUserManual(_x5, _x6) {
  return _postUserManual.apply(this, arguments);
}

function _postUserManual() {
  _postUserManual = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var _req$body, name, lastname, email, password, newUser;

    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _req$body = req.body, name = _req$body.name, lastname = _req$body.lastname, email = _req$body.email, password = _req$body.password; //console.log(name, lastname, email, password, "😀");

            _context4.prev = 1;
            _context4.next = 4;
            return _User.User.create({
              name: name,
              lastname: lastname,
              email: email,
              password: password
            }, {
              fields: ['name', 'lastname', 'email', 'password']
            });

          case 4:
            newUser = _context4.sent;
            res.status(201).json({
              msg: newUser
            });
            _context4.next = 12;
            break;

          case 8:
            _context4.prev = 8;
            _context4.t0 = _context4["catch"](1);
            console.log(_context4.t0);
            res.status(400).json({
              msg: 'Error'
            });

          case 12:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[1, 8]]);
  }));
  return _postUserManual.apply(this, arguments);
}

function updateOneUser(_x7, _x8) {
  return _updateOneUser.apply(this, arguments);
}

function _updateOneUser() {
  _updateOneUser = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {
    var idUser, _req$body2, name, lastname, email, password, userToUpdate;

    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            idUser = req.params.idUser;
            _req$body2 = req.body, name = _req$body2.name, lastname = _req$body2.lastname, email = _req$body2.email, password = _req$body2.password;
            _context5.next = 4;
            return _User.User.findOne({
              where: {
                id: idUser
              }
            });

          case 4:
            userToUpdate = _context5.sent;
            _context5.next = 7;
            return userToUpdate.update({
              name: name,
              lastname: lastname,
              email: email,
              password: password
            });

          case 7:
            res.status(200).json({
              response: 'user updated'
            });

          case 8:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));
  return _updateOneUser.apply(this, arguments);
}

function deleteOneUser(_x9, _x10) {
  return _deleteOneUser.apply(this, arguments);
}

function _deleteOneUser() {
  _deleteOneUser = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(req, res) {
    var idUser, countRow;
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            idUser = req.params.idUser;
            _context6.prev = 1;
            _context6.next = 4;
            return _User.User.destroy({
              where: {
                id: idUser
              }
            });

          case 4:
            countRow = _context6.sent;

            if (countRow === 0) {
              res.status(404).json({
                response: 'Not found'
              });
            } else {
              res.status(200).json({
                response: 'User deleted',
                count: countRow
              });
            }

            _context6.next = 11;
            break;

          case 8:
            _context6.prev = 8;
            _context6.t0 = _context6["catch"](1);
            res.status(500).json({
              response: 'Error'
            });

          case 11:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, null, [[1, 8]]);
  }));
  return _deleteOneUser.apply(this, arguments);
}