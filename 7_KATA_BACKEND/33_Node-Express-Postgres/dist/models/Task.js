"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Task = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _postgres = require("../database/postgres.db");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Task = _postgres.sequelize.define("tasks", {
  id: {
    type: _sequelize["default"].INTEGER,
    primaryKey: true
  },
  name: {
    type: _sequelize["default"].TEXT
  },
  description: {
    type: _sequelize["default"].TEXT
  },
  done: {
    type: _sequelize["default"].BOOLEAN
  },
  deliverydate: {
    type: _sequelize["default"].DATE
  },
  userid: {
    type: _sequelize["default"].INTEGER
  }
}, {
  timestamps: false
});

exports.Task = Task;