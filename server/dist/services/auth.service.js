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
const _bcrypt = require("bcrypt");
const _jsonwebtoken = require("jsonwebtoken");
const _config = require("../config");
const _HttpException = require("../exceptions/HttpException");
const _usersmodel = /*#__PURE__*/ _interop_require_default(require("../models/users.model"));
const _util = require("../utils/util");
const _uuid = require("uuid");
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
let AuthService = class AuthService {
    async signup(userData) {
        if ((0, _util.isEmpty)(userData)) throw new _HttpException.HttpException(400, 'UserData is empty');
        const findUser = await this.users.findOne({
            where: {
                username: userData.username
            }
        });
        if (findUser) throw new _HttpException.HttpException(409, `This username already exists`);
        const hashedPassword = await (0, _bcrypt.hash)(userData.password, 10);
        const createUserData = await this.users.create(_object_spread_props(_object_spread({}, userData), {
            id: (0, _uuid.v4)(),
            password: hashedPassword
        }));
        createUserData.password = undefined;
        return createUserData;
    }
    async login(userData) {
        if ((0, _util.isEmpty)(userData)) throw new _HttpException.HttpException(400, 'UserData is empty');
        const findUser = await this.users.findOne({
            where: {
                username: userData.username
            }
        });
        if (!findUser) throw new _HttpException.HttpException(404, `This username ${userData.username} was not found`);
        const isPasswordMatching = await (0, _bcrypt.compare)(userData.password, findUser.password);
        if (!isPasswordMatching) throw new _HttpException.HttpException(409, 'Password is not matching');
        const tokenData = this.createToken(findUser);
        findUser.password = undefined;
        return {
            findUser,
            tokenData
        };
    }
    async logout(userId) {
        if ((0, _util.isEmpty)(userId)) throw new _HttpException.HttpException(400, 'User Id is empty');
        const findUser = await this.users.findByPk(userId);
        if (!findUser) throw new _HttpException.HttpException(404, `User not found`);
        return findUser;
    }
    createToken(user) {
        const dataStoredInToken = {
            userId: user.id
        };
        const secretKey = _config.SECRET_KEY;
        const expiresIn = 60 * 60 * 24 * 1000;
        return {
            expiresIn,
            token: (0, _jsonwebtoken.sign)(dataStoredInToken, secretKey, {
                expiresIn
            })
        };
    }
    constructor(){
        _define_property(this, "users", _usersmodel.default);
    }
};
const _default = AuthService;

//# sourceMappingURL=auth.service.js.map