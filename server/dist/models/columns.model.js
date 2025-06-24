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
let ColumnModel = class ColumnModel extends _sequelize.Model {
};
ColumnModel.init({
    id: {
        type: _sequelize.DataTypes.STRING,
        primaryKey: true
    },
    title: {
        type: _sequelize.DataTypes.STRING,
        allowNull: false
    },
    userId: _sequelize.DataTypes.STRING
}, {
    tableName: 'columns',
    sequelize: _databases.db
});
ColumnModel.sync();
const _default = ColumnModel;

//# sourceMappingURL=columns.model.js.map