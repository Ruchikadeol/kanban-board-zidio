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
let UserModel = class UserModel extends _sequelize.Model {
};
UserModel.init({
    id: {
        type: _sequelize.DataTypes.STRING,
        primaryKey: true
    },
    username: {
        type: _sequelize.DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: _sequelize.DataTypes.STRING
}, {
    tableName: 'users',
    sequelize: _databases.db
});
UserModel.sync();
const _default = UserModel;

//# sourceMappingURL=users.model.js.map