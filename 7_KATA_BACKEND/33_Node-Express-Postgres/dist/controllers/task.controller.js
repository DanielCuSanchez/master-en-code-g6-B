"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTasks = getTasks;
exports.getOneTask = getOneTask;
exports.postTask = postTask;
exports.updateOneTask = updateOneTask;
exports.deleteOneTask = deleteOneTask;

var _Task = require("../models/Task");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function getTasks(_x, _x2) {
  return _getTasks.apply(this, arguments);
}

function _getTasks() {
  _getTasks = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var idUser, allTasks;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            idUser = req.query.idUser;

            if (!idUser) {
              _context.next = 7;
              break;
            }

            _context.next = 4;
            return _Task.Task.findAll({
              where: {
                userid: idUser
              }
            });

          case 4:
            allTasks = _context.sent;
            _context.next = 10;
            break;

          case 7:
            _context.next = 9;
            return _Task.Task.findAll({
              attributes: ["id", "name", "description", "done", "deliverydate", "userid"]
            });

          case 9:
            allTasks = _context.sent;

          case 10:
            res.status(200).json({
              response: "all tasks",
              data: allTasks
            });

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _getTasks.apply(this, arguments);
}

function getOneTask(_x3, _x4) {
  return _getOneTask.apply(this, arguments);
}

function _getOneTask() {
  _getOneTask = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var idTask, oneTask;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            idTask = req.params.idTask;
            _context2.prev = 1;
            _context2.next = 4;
            return _Task.Task.findOne({
              where: {
                id: idTask
              }
            });

          case 4:
            oneTask = _context2.sent;

            if (!(oneTask === null)) {
              _context2.next = 8;
              break;
            }

            res.status(404).json({
              response: "not found"
            });
            return _context2.abrupt("return");

          case 8:
            res.status(200).json({
              response: "This is the task",
              data: oneTask
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
  return _getOneTask.apply(this, arguments);
}

function postTask(_x5, _x6) {
  return _postTask.apply(this, arguments);
}

function _postTask() {
  _postTask = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var _req$body, name, description, done, deliverydate, userid, newTask;

    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _req$body = req.body, name = _req$body.name, description = _req$body.description, done = _req$body.done, deliverydate = _req$body.deliverydate, userid = _req$body.userid;
            _context3.prev = 1;
            _context3.next = 4;
            return _Task.Task.create({
              name: name,
              description: description,
              done: done,
              deliverydate: deliverydate,
              userid: userid
            }, {
              fields: ["name", "description", "done", "deliverydate", "userid"]
            });

          case 4:
            newTask = _context3.sent;
            res.status(200).json({
              response: "post succesfully",
              taskCreated: newTask
            });
            _context3.next = 12;
            break;

          case 8:
            _context3.prev = 8;
            _context3.t0 = _context3["catch"](1);
            console.log(_context3.t0);
            res.status(500).json({
              response: "Internal server error"
            });

          case 12:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[1, 8]]);
  }));
  return _postTask.apply(this, arguments);
}

function updateOneTask(_x7, _x8) {
  return _updateOneTask.apply(this, arguments);
}

function _updateOneTask() {
  _updateOneTask = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var idTask, _req$body2, name, description, done, deliverydate, userid, taskToUpdate;

    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            idTask = req.params.idTask;
            _req$body2 = req.body, name = _req$body2.name, description = _req$body2.description, done = _req$body2.done, deliverydate = _req$body2.deliverydate, userid = _req$body2.userid;
            _context4.next = 4;
            return _Task.Task.findOne({
              where: {
                id: idTask
              }
            });

          case 4:
            taskToUpdate = _context4.sent;
            _context4.next = 7;
            return taskToUpdate.update({
              name: name,
              description: description,
              done: done,
              deliverydate: deliverydate,
              userid: userid
            });

          case 7:
            res.status(200).json({
              response: "task updated"
            });

          case 8:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return _updateOneTask.apply(this, arguments);
}

function deleteOneTask(_x9, _x10) {
  return _deleteOneTask.apply(this, arguments);
}

function _deleteOneTask() {
  _deleteOneTask = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {
    var idTask, countRow;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            idTask = req.params.idTask;
            _context5.prev = 1;
            _context5.next = 4;
            return _Task.Task.destroy({
              where: {
                id: idTask
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
                response: "Task deleted",
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
  return _deleteOneTask.apply(this, arguments);
}