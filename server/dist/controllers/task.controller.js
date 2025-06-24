"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "TaskController", {
    enumerable: true,
    get: function() {
        return TaskController;
    }
});
const _taskservice = require("../services/task.service");
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
let TaskController = class TaskController {
    constructor(){
        _define_property(this, "taskService", new _taskservice.TaskService());
        _define_property(this, "getAllTasksOfUser", async (req, res, next)=>{
            try {
                const userId = req.userId;
                const findAllTasksData = await this.taskService.findAllTasksOfUser(userId);
                res.status(200).json({
                    data: findAllTasksData,
                    message: 'findAll'
                });
            } catch (error) {
                next(error);
            }
        });
        _define_property(this, "createTask", async (req, res, next)=>{
            try {
                const userId = req.userId;
                const taskData = req.body;
                const createTaskData = await this.taskService.createTask(userId, taskData);
                res.status(201).json({
                    data: createTaskData,
                    message: 'created'
                });
            } catch (error) {
                next(error);
            }
        });
        _define_property(this, "updateTask", async (req, res, next)=>{
            try {
                const taskId = req.params.id;
                const taskData = req.body;
                const userId = req.userId;
                const updateTaskData = await this.taskService.updateTask(taskId, userId, taskData);
                res.status(200).json({
                    data: updateTaskData,
                    message: 'updated'
                });
            } catch (error) {
                next(error);
            }
        });
        _define_property(this, "updateTaskPosition", async (req, res, next)=>{
            try {
                const taskPositionData = req.body;
                const taskId = req.params.id;
                const updateTaskData = await this.taskService.updateTaskPosition(taskId, taskPositionData);
                res.status(200).json({
                    data: updateTaskData,
                    message: 'updated'
                });
            } catch (error) {
                next(error);
            }
        });
        _define_property(this, "deleteTask", async (req, res, next)=>{
            try {
                const taskId = req.params.id;
                const userId = req.userId;
                const deleteTaskData = await this.taskService.deleteTask(taskId, userId);
                res.status(200).json({
                    data: deleteTaskData,
                    message: 'deleted'
                });
            } catch (error) {
                next(error);
            }
        });
    }
};

//# sourceMappingURL=task.controller.js.map