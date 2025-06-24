"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
const _databases = require("../databases");
const _sequelize = require("sequelize");
let TaskModel = class TaskModel extends _sequelize.Model {
};
TaskModel.init({
    id: {
        type: _sequelize.DataTypes.STRING,
        primaryKey: true
    },
    position: {
        type: _sequelize.DataTypes.INTEGER,
        allowNull: false
    },
    content: {
        type: _sequelize.DataTypes.STRING,
        allowNull: false
    },
    userId: _sequelize.DataTypes.STRING,
    columnId: _sequelize.DataTypes.STRING
}, {
    tableName: 'tasks',
    sequelize: _databases.db
});
TaskModel.sync();
const _default = TaskModel;

//# sourceMappingURL=tasks.model.js.map