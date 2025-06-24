"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "setupAssociations", {
    enumerable: true,
    get: function() {
        return setupAssociations;
    }
});
const _usersmodel = /*#__PURE__*/ _interop_require_default(require("./users.model"));
const _columnsmodel = /*#__PURE__*/ _interop_require_default(require("./columns.model"));
const _tasksmodel = /*#__PURE__*/ _interop_require_default(require("./tasks.model"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const setupAssociations = ()=>{
    _usersmodel.default.hasMany(_columnsmodel.default, {
        sourceKey: 'id',
        foreignKey: 'userId',
        as: 'columns'
    });
    _usersmodel.default.hasMany(_tasksmodel.default, {
        sourceKey: 'id',
        foreignKey: 'userId',
        as: 'tasks'
    });
    _columnsmodel.default.belongsTo(_usersmodel.default, {
        foreignKey: 'userId',
        as: 'user'
    });
    _columnsmodel.default.hasMany(_tasksmodel.default, {
        sourceKey: 'id',
        foreignKey: 'columnId',
        as: 'tasks',
        onDelete: 'CASCADE'
    });
    _tasksmodel.default.belongsTo(_columnsmodel.default, {
        foreignKey: 'columnId',
        as: 'column'
    });
    _tasksmodel.default.belongsTo(_usersmodel.default, {
        foreignKey: 'userId',
        as: 'user'
    });
};

//# sourceMappingURL=associations.js.map