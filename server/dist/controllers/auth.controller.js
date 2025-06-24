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
const _authservice = /*#__PURE__*/ _interop_require_default(require("../services/auth.service"));
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
let AuthController = class AuthController {
    constructor(){
        _define_property(this, "authService", new _authservice.default());
        _define_property(this, "signUp", async (req, res, next)=>{
            try {
                const userData = req.body;
                const signUpUserData = await this.authService.signup(userData);
                res.status(201).json({
                    data: signUpUserData,
                    message: 'signup'
                });
            } catch (error) {
                next(error);
            }
        });
        _define_property(this, "logIn", async (req, res, next)=>{
            try {
                const userData = req.body;
                const { tokenData, findUser } = await this.authService.login(userData);
                res.cookie('Authorization', tokenData.token, {
                    maxAge: tokenData.expiresIn,
                    path: '/'
                });
                res.status(200).json({
                    data: findUser,
                    message: 'login',
                    token: tokenData.token
                });
            } catch (error) {
                next(error);
            }
        });
        _define_property(this, "logOut", async (req, res, next)=>{
            try {
                const userId = req.userId;
                const logOutUserData = await this.authService.logout(userId);
                res.cookie('Authorization', [
                    ''
                ], {
                    maxAge: 0
                });
                logOutUserData.password = undefined;
                res.status(200).json({
                    data: logOutUserData,
                    message: 'logout'
                });
            } catch (error) {
                next(error);
            }
        });
    }
};
const _default = AuthController;

//# sourceMappingURL=auth.controller.js.map