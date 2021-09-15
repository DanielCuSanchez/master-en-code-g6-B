"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.User = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _postgres = require("../database/postgres.db");

var _Task = require("./Task");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var User = _postgres.sequelize.define("users", {
  id: {
    type: _sequelize["default"].INTEGER,
    primaryKey: true
  },
  name: {
    type: _sequelize["default"].TEXT
  },
  lastname: {
    type: _sequelize["default"].TEXT
  },
  email: {
    type: _sequelize["default"].TEXT,
    unique: true
  },
  password: {
    type: _sequelize["default"].TEXT
  }
}, {
  timestamps: false
});

exports.User = User;
User.hasMany(_Task.Task, {
  foreignKey: "userid",
  sourceKey: "id"
});

_Task.Task.belongsTo(User, {
  foreignKey: "userid",
  targetId: "id"
});