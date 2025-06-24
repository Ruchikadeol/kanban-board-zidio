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
    get CreateTaskDto () {
        return CreateTaskDto;
    },
    get UpdateTaskDto () {
        return UpdateTaskDto;
    },
    get UpdateTaskPositionDto () {
        return UpdateTaskPositionDto;
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
let CreateTaskDto = class CreateTaskDto {
    constructor(){
        _define_property(this, "id", void 0);
        _define_property(this, "columnId", void 0);
        _define_property(this, "content", void 0);
        _define_property(this, "position", void 0);
    }
};
_ts_decorate([
    (0, _classvalidator.IsUUID)(),
    _ts_metadata("design:type", String)
], CreateTaskDto.prototype, "id", void 0);
_ts_decorate([
    (0, _classvalidator.IsUUID)(),
    _ts_metadata("design:type", String)
], CreateTaskDto.prototype, "columnId", void 0);
_ts_decorate([
    (0, _classvalidator.IsString)(),
    _ts_metadata("design:type", String)
], CreateTaskDto.prototype, "content", void 0);
_ts_decorate([
    (0, _classvalidator.IsNumber)(),
    _ts_metadata("design:type", Number)
], CreateTaskDto.prototype, "position", void 0);
let UpdateTaskDto = class UpdateTaskDto {
    constructor(){
        _define_property(this, "content", void 0);
    }
};
_ts_decorate([
    (0, _classvalidator.IsString)(),
    _ts_metadata("design:type", String)
], UpdateTaskDto.prototype, "content", void 0);
let UpdateTaskPositionDto = class UpdateTaskPositionDto {
    constructor(){
        _define_property(this, "sourceColumnId", void 0);
        _define_property(this, "destinationColumnId", void 0);
    }
};
_ts_decorate([
    (0, _classvalidator.IsUUID)(),
    _ts_metadata("design:type", String)
], UpdateTaskPositionDto.prototype, "sourceColumnId", void 0);
_ts_decorate([
    (0, _classvalidator.IsUUID)(),
    _ts_metadata("design:type", String)
], UpdateTaskPositionDto.prototype, "destinationColumnId", void 0);

//# sourceMappingURL=tasks.dto.js.map