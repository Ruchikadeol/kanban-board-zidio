"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ColumnController", {
    enumerable: true,
    get: function() {
        return ColumnController;
    }
});
const _columnservice = require("../services/column.service");
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
let ColumnController = class ColumnController {
    constructor(){
        _define_property(this, "columnService", new _columnservice.ColumnService());
        _define_property(this, "getAllColumnsOfUser", async (req, res, next)=>{
            try {
                const userId = req.userId;
                const findAllColumnsData = await this.columnService.findAllColumnsOfUser(userId);
                res.status(200).json({
                    data: findAllColumnsData,
                    message: 'findAll'
                });
            } catch (error) {
                next(error);
            }
        });
        _define_property(this, "createColumn", async (req, res, next)=>{
            try {
                const userId = req.userId;
                const columnData = req.body;
                const createColumnData = await this.columnService.createColumn(userId, columnData);
                res.status(201).json({
                    data: createColumnData,
                    message: 'created'
                });
            } catch (error) {
                next(error);
            }
        });
        _define_property(this, "updateColumn", async (req, res, next)=>{
            try {
                const columnId = req.params.id;
                const columnData = req.body;
                const userId = req.userId;
                const updateColumnData = await this.columnService.updateColumn(columnId, userId, columnData);
                res.status(200).json({
                    data: updateColumnData,
                    message: 'updated'
                });
            } catch (error) {
                next(error);
            }
        });
        _define_property(this, "deleteColumn", async (req, res, next)=>{
            try {
                const columnId = req.params.id;
                const userId = req.userId;
                const deleteColumnData = await this.columnService.deleteColumn(columnId, userId);
                res.status(200).json({
                    data: deleteColumnData,
                    message: 'deleted'
                });
            } catch (error) {
                next(error);
            }
        });
    }
};

//# sourceMappingURL=column.contoller.js.map