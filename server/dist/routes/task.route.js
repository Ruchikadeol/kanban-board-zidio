"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "TaskRoutes", {
    enumerable: true,
    get: function() {
        return TaskRoutes;
    }
});
const _taskcontroller = require("../controllers/task.controller");
const _tasksdto = require("../dtos/tasks.dto");
const _authmiddleware = /*#__PURE__*/ _interop_require_default(require("../middlewares/auth.middleware"));
const _validationmiddleware = /*#__PURE__*/ _interop_require_default(require("../middlewares/validation.middleware"));
const _express = require("express");
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
let TaskRoutes = class TaskRoutes {
    initializeRoutes() {
        this.router.post(`${this.path}`, (0, _validationmiddleware.default)(_tasksdto.CreateTaskDto, 'body'), _authmiddleware.default, this.taskController.createTask);
        this.router.get(`${this.path}`, _authmiddleware.default, this.taskController.getAllTasksOfUser);
        this.router.put(`${this.path}/move/:id`, _authmiddleware.default, (0, _validationmiddleware.default)(_tasksdto.UpdateTaskPositionDto, 'body', true), this.taskController.updateTaskPosition);
        this.router.put(`${this.path}/:id`, _authmiddleware.default, (0, _validationmiddleware.default)(_tasksdto.UpdateTaskDto, 'body', true), this.taskController.updateTask);
        this.router.delete(`${this.path}/:id`, _authmiddleware.default, this.taskController.deleteTask);
    }
    constructor(){
        _define_property(this, "path", '/task');
        _define_property(this, "router", (0, _express.Router)());
        _define_property(this, "taskController", new _taskcontroller.TaskController());
        this.initializeRoutes();
    }
};

//# sourceMappingURL=task.route.js.map