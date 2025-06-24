"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "db", {
    enumerable: true,
    get: function() {
        return db;
    }
});
const _config = require("../config");
const _sequelize = require("sequelize");
const db = new _sequelize.Sequelize(_config.DB_DATABASE, _config.DB_USERNAME, _config.DB_PASSWORD, {
    host: _config.DB_HOST,
    port: Number(_config.DB_PORT),
    dialect: 'postgres',
    logging: false
});

//# sourceMappingURL=index.js.map