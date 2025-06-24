"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "TaskService", {
    enumerable: true,
    get: function() {
        return TaskService;
    }
});
const _HttpException = require("../exceptions/HttpException");
const _tasksmodel = /*#__PURE__*/ _interop_require_default(require("../models/tasks.model"));
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
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _define_property(target, key, source[key]);
        });
    }
    return target;
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _object_spread_props(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
let TaskService = class TaskService {
    async findAllTasksOfUser(userId) {
        const findTasks = await this.tasks.findAll({
            where: {
                userId: userId
            },
            order: [
                [
                    'updatedAt',
                    'DESC'
                ]
            ]
        });
        return findTasks;
    }
    async createTask(userId, taskData) {
        const createTaskData = await this.tasks.create(_object_spread_props(_object_spread({}, taskData), {
            userId
        }));
        return createTaskData;
    }
    async updateTask(taskId, userId, taskData) {
        const findTask = await this.tasks.findOne({
            where: {
                id: taskId,
                userId: userId
            }
        });
        if (!findTask) throw new _HttpException.HttpException(404, `This task ${taskId} was not found`);
        const updateTaskData = await this.tasks.update(_object_spread({}, taskData), {
            where: {
                id: taskId
            }
        });
        return updateTaskData;
    }
    async updateTaskPosition(taskId, taskPositionData) {
        const { sourceColumnId, destinationColumnId } = taskPositionData;
        const findTask = await this.tasks.findOne({
            where: {
                columnId: sourceColumnId,
                id: taskId
            }
        });
        if (!findTask) throw new _HttpException.HttpException(404, `This task ${taskId} was not found`);
        const updateTaskData = await this.tasks.update({
            columnId: destinationColumnId
        }, {
            where: {
                id: taskId,
                columnId: sourceColumnId
            }
        });
        return updateTaskData;
    }
    async deleteTask(taskId, userId) {
        const findTask = await this.tasks.findOne({
            where: {
                id: taskId,
                userId: userId
            }
        });
        if (!findTask) throw new _HttpException.HttpException(404, `This task ${taskId} was not found`);
        const deleteTaskData = await this.tasks.destroy({
            where: {
                id: taskId
            }
        });
        return deleteTaskData;
    }
    constructor(){
        _define_property(this, "tasks", _tasksmodel.default);
    }
};

//# sourceMappingURL=task.service.js.map