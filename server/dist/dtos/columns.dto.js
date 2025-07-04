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
    get CreateColumnDto () {
        return CreateColumnDto;
    },
    get UpdateColumnDto () {
        return UpdateColumnDto;
    }
});
const _classvalidator = require("class-validator");
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
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
let CreateColumnDto = class CreateColumnDto {
    constructor(){
        _define_property(this, "id", void 0);
        _define_property(this, "title", void 0);
    }
};
_ts_decorate([
    (0, _classvalidator.IsUUID)(),
    _ts_metadata("design:type", String)
], CreateColumnDto.prototype, "id", void 0);
_ts_decorate([
    (0, _classvalidator.IsString)(),
    _ts_metadata("design:type", String)
], CreateColumnDto.prototype, "title", void 0);
let UpdateColumnDto = class UpdateColumnDto {
    constructor(){
        _define_property(this, "title", void 0);
    }
};
_ts_decorate([
    (0, _classvalidator.IsString)(),
    _ts_metadata("design:type", String)
], UpdateColumnDto.prototype, "title", void 0);

//# sourceMappingURL=columns.dto.js.map