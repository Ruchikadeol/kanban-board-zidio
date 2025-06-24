"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: Object.getOwnPropertyDescriptor(all, name).get
    });
}
_export(exports, {
    get CREDENTIALS () {
        return CREDENTIALS;
    },
    get DB_DATABASE () {
        return DB_DATABASE;
    },
    get DB_HOST () {
        return DB_HOST;
    },
    get DB_PASSWORD () {
        return DB_PASSWORD;
    },
    get DB_PORT () {
        return DB_PORT;
    },
    get DB_USERNAME () {
        return DB_USERNAME;
    },
    get LOG_FORMAT () {
        return LOG_FORMAT;
    },
    get NODE_ENV () {
        return NODE_ENV;
    },
    get ORIGIN () {
        return ORIGIN;
    },
    get PORT () {
        return PORT;
    },
    get SECRET_KEY () {
        return SECRET_KEY;
    }
});
const _dotenv = require("dotenv");
(0, _dotenv.config)({
    path: `.env.${process.env.NODE_ENV || 'development'}.local`
});
const CREDENTIALS = process.env.CREDENTIALS === 'true';
const { NODE_ENV, PORT, DB_HOST, DB_PORT, DB_DATABASE, DB_USERNAME, DB_PASSWORD, SECRET_KEY, LOG_FORMAT, ORIGIN } = process.env;

//# sourceMappingURL=index.js.map