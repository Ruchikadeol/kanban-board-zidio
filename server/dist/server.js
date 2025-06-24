"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
const _app = /*#__PURE__*/ _interop_require_default(require("./app"));
const _authroute = /*#__PURE__*/ _interop_require_default(require("./routes/auth.route"));
const _indexroute = /*#__PURE__*/ _interop_require_default(require("./routes/index.route"));
const _validateEnv = /*#__PURE__*/ _interop_require_default(require("./utils/validateEnv"));
const _columnroute = require("./routes/column.route");
const _taskroute = require("./routes/task.route");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
(0, _validateEnv.default)();
const app = new _app.default([
    new _indexroute.default(),
    new _authroute.default(),
    new _columnroute.ColumnRoutes(),
    new _taskroute.TaskRoutes()
]);
app.listen();

//# sourceMappingURL=server.js.map