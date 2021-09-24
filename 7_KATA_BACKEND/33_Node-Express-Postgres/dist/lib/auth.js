"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.verifyToken = exports.validateToken = exports.createToken = void 0;

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _config = _interopRequireDefault(require("../config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//Funcion normal
var createToken = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(id) {
    var token;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _jsonwebtoken["default"].sign({
              payload: {
                id: id
              }
            }, _config["default"].SECRET_JWT, {
              expiresIn: '1d'
            });

          case 2:
            token = _context.sent;
            return _context.abrupt("return", token);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function createToken(_x) {
    return _ref.apply(this, arguments);
  };
}(); //Funcion normal


exports.createToken = createToken;

var validateToken = function validateToken(token) {
  return _jsonwebtoken["default"].verify(token, _config["default"].SECRET_JWT, function (error, decodedToken) {
    if (error) {
      return false;
    } else {
      return decodedToken;
    }
  });
}; //Funcion middleware


exports.validateToken = validateToken;

var verifyToken = function verifyToken(req, res, next) {
  //Primer paso verificar el token
  var _req$headers$authoriz = req.headers.authorization,
      authorization = _req$headers$authoriz === void 0 ? undefined : _req$headers$authoriz; //Revisamos si esta presente en headers el token

  if (!authorization) {
    res.status(400).json({
      msg: 'necesitas un token'
    });
    return;
  } //Si esta presente extraemos el token


  var token = authorization.split(' ')[1]; //Revisamos que sea un token valido

  var tokenDecodificado = validateToken(token);

  if (!tokenDecodificado) {
    res.status(400).json({
      msg: 'token invalido o caducado'
    });
    return;
  } //Extraemos el ID del token para que lo utilicemos en las consultas


  var payload = tokenDecodificado.payload; //Logica en caso de que tengan su app con roles
  // if (payload.role !== 'ADMIN') {
  // 	res.status(400).json({ msg: 'No eres ADMIN' });
  // 	return;
  // }

  req.body.id = payload.id; //Invoca al siguiente middleware

  next();
};

exports.verifyToken = verifyToken;