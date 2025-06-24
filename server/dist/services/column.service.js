"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ColumnService", {
    enumerable: true,
    get: function() {
        return ColumnService;
    }
});
const _HttpException = require("../exceptions/HttpException");
const _columnsmodel = /*#__PURE__*/ _interop_require_default(require("../models/columns.model"));
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
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _define_property(target, key, source[key]);
        });
    }
    return target;
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _object_spread_props(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
let ColumnService = class ColumnService {
    async findAllColumnsOfUser(userId) {
        const findColumns = await this.columns.findAll({
            where: {
                userId: userId
            },
            order: [
                [
                    'createdAt',
                    'ASC'
                ]
            ]
        });
        return findColumns;
    }
    async createColumn(userId, columnData) {
        const createColumnData = await this.columns.create(_object_spread_props(_object_spread({}, columnData), {
            userId
        }));
        return createColumnData;
    }
    async updateColumn(columnId, userId, columnData) {
        const findColumn = await this.columns.findOne({
            where: {
                id: columnId,
                userId: userId
            }
        });
        if (!findColumn) throw new _HttpException.HttpException(404, `This column ${columnId} was not found`);
        const updateColumnData = await this.columns.update(_object_spread({}, columnData), {
            where: {
                id: columnId
            }
        });
        return updateColumnData;
    }
    async deleteColumn(columnId, userId) {
        const findColumn = await this.columns.findOne({
            where: {
                id: columnId,
                userId: userId
            }
        });
        if (!findColumn) throw new _HttpException.HttpException(404, `This column ${columnId} was not found`);
        const deleteColumnData = await this.columns.destroy({
            where: {
                id: columnId
            }
        });
        return deleteColumnData;
    }
    constructor(){
        _define_property(this, "columns", _columnsmodel.default);
    }
};

//# sourceMappingURL=column.service.js.map