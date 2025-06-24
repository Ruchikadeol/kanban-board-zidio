"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ColumnRoutes", {
    enumerable: true,
    get: function() {
        return ColumnRoutes;
    }
});
const _columncontoller = require("../controllers/column.contoller");
const _columnsdto = require("../dtos/columns.dto");
const _authmiddleware = /*#__PURE__*/ _interop_require_default(require("../middlewares/auth.middleware"));
const _validationmiddleware = /*#__PURE__*/ _interop_require_default(require("../middlewares/validation.middleware"));
const _express = require("express");
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
let ColumnRoutes = class ColumnRoutes {
    initializeRoutes() {
        this.router.post(`${this.path}`, (0, _validationmiddleware.default)(_columnsdto.CreateColumnDto, 'body'), _authmiddleware.default, this.columnController.createColumn);
        this.router.get(`${this.path}`, _authmiddleware.default, this.columnController.getAllColumnsOfUser);
        this.router.put(`${this.path}/:id`, _authmiddleware.default, (0, _validationmiddleware.default)(_columnsdto.UpdateColumnDto, 'body', true), this.columnController.updateColumn);
        this.router.delete(`${this.path}/:id`, _authmiddleware.default, this.columnController.deleteColumn);
    }
    constructor(){
        _define_property(this, "path", '/column');
        _define_property(this, "router", (0, _express.Router)());
        _define_property(this, "columnController", new _columncontoller.ColumnController());
        this.initializeRoutes();
    }
};

//# sourceMappingURL=column.route.js.map