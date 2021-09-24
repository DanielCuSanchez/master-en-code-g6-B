"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateEncryptedPassword = exports.encryptPasswordUser = exports.validatePostUser = void 0;

var _joi = _interopRequireDefault(require("joi"));

var _bcrypt = _interopRequireDefault(require("bcrypt"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var schemaUser = _joi["default"].object({
  name: _joi["default"].string().min(2).required(),
  lastname: _joi["default"].string().min(2).required(),
  email: _joi["default"].string().email().required(),
  password: _joi["default"].string().min(8).max(30).alphanum().required()
});

var validatePostUser = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res, next) {
    var errores;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return schemaUser.validateAsync(req.body, {
              abortEarly: false
            });

          case 3:
            next();
            _context.next = 11;
            break;

          case 6:
            _context.prev = 6;
            _context.t0 = _context["catch"](0);
            //arreglo temporal
            errores = []; //recorrer el arreglo de errores y por cada objeto solo obtener el mensaje

            _context.t0.details.forEach(function (error) {
              errores.push(error.message);
            });

            res.status(400).json({
              message: errores
            });

          case 11:
            return _context.abrupt("return");

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 6]]);
  }));

  return function validatePostUser(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

exports.validatePostUser = validatePostUser;

var encryptPasswordUser = function encryptPasswordUser(req, res, next) {
  var passwordToEncrypt = req.body.password;
  var saltRounds = 10;

  var salt = _bcrypt["default"].genSaltSync(saltRounds);

  var encryptedPassword = _bcrypt["default"].hashSync(passwordToEncrypt, salt);

  req.body.password = encryptedPassword; //res.status(200).json({ msg: encryptedPassword });

  next();
};

exports.encryptPasswordUser = encryptPasswordUser;

var validateEncryptedPassword = function validateEncryptedPassword(normalPassword, passwordEscrypted) {
  return _bcrypt["default"].compareSync(normalPassword, passwordEscrypted);
};

exports.validateEncryptedPassword = validateEncryptedPassword;