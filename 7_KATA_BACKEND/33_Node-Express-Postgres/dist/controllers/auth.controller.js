"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.login = exports.registro = void 0;

var _auth = require("../lib/auth");

var _user = require("./user.controller");

var _user2 = require("../middlewares/user.middlewares");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var registro = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var userCreated, token;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0, _user.postUser)(req.body);

          case 2:
            userCreated = _context.sent;
            _context.next = 5;
            return (0, _auth.createToken)(userCreated.id);

          case 5:
            token = _context.sent;
            res.status(201).json({
              token: token
            });

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function registro(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.registro = registro;

var login = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var userExist, isPasswordCorrect, token;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            console.log('😀', req.body);

            if (!(req.body === {})) {
              _context2.next = 4;
              break;
            }

            res.status(400).json({
              msg: 'objeto vacio'
            });
            return _context2.abrupt("return");

          case 4:
            _context2.next = 6;
            return (0, _user.getOneUserByEmail)(req.body.email);

          case 6:
            userExist = _context2.sent;

            if (userExist) {
              _context2.next = 10;
              break;
            }

            res.status(400).json({
              msg: 'Correo no existe'
            });
            return _context2.abrupt("return");

          case 10:
            if (!(req.body.email !== userExist.dataValues.email)) {
              _context2.next = 13;
              break;
            }

            res.status(400).json({
              msg: 'email invalido'
            });
            return _context2.abrupt("return");

          case 13:
            //segundo paso comprobar contraseña
            isPasswordCorrect = (0, _user2.validateEncryptedPassword)(req.body.password, userExist.dataValues.password);

            if (isPasswordCorrect) {
              _context2.next = 17;
              break;
            }

            res.status(400).json({
              msg: 'password invalida'
            });
            return _context2.abrupt("return");

          case 17:
            _context2.next = 19;
            return (0, _auth.createToken)(userExist.id);

          case 19:
            token = _context2.sent;
            //Cuarto paso confirmar la autenticacion
            res.status(200).json({
              msg: 'Login Success',
              token: token
            });

          case 21:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function login(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.login = login;