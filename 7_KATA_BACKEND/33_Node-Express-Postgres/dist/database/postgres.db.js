"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sequelize = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _fs = _interopRequireDefault(require("fs"));

var _index = _interopRequireDefault(require("../config/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var sequelize = new _sequelize["default"](_index["default"].DB_DATABASE, _index["default"].DB_USER, _index["default"].DB_PASS, {
  host: _index["default"].DB_HOST,
  dialect: 'postgres',
  sslmode: true,
  pool: {
    max: 5,
    min: 0,
    require: 3000,
    idle: 10000
  },
  logging: false
});
exports.sequelize = sequelize;