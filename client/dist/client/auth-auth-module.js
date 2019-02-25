(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["auth-auth-module"],{

/***/ "./src/app/auth/auth-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/auth/auth-routing.module.ts ***!
  \*********************************************/
/*! exports provided: AuthRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthRoutingModule", function() { return AuthRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.component */ "./src/app/auth/auth.component.ts");
/* harmony import */ var _containers_register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./containers/register/register.component */ "./src/app/auth/containers/register/register.component.ts");
/* harmony import */ var _containers_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./containers/login/login.component */ "./src/app/auth/containers/login/login.component.ts");






var routes = [{
        path: '',
        component: _auth_component__WEBPACK_IMPORTED_MODULE_3__["AuthComponent"],
        children: [{
                path: 'login',
                component: _containers_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"]
            }, {
                path: 'register',
                component: _containers_register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"]
            }, {
                path: '',
                redirectTo: 'login',
                pathMatch: 'full'
            }]
    }];
var AuthRoutingModule = /** @class */ (function () {
    function AuthRoutingModule() {
    }
    AuthRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AuthRoutingModule);
    return AuthRoutingModule;
}());



/***/ }),

/***/ "./src/app/auth/auth.component.html":
/*!******************************************!*\
  !*** ./src/app/auth/auth.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-wrapper\">\n    <div class=\"account-page\">\n        <div class=\"container\">\n            <router-outlet></router-outlet>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/auth/auth.component.ts":
/*!****************************************!*\
  !*** ./src/app/auth/auth.component.ts ***!
  \****************************************/
/*! exports provided: AuthComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthComponent", function() { return AuthComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AuthComponent = /** @class */ (function () {
    function AuthComponent() {
    }
    AuthComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-auth',
            template: __webpack_require__(/*! ./auth.component.html */ "./src/app/auth/auth.component.html"),
        })
    ], AuthComponent);
    return AuthComponent;
}());



/***/ }),

/***/ "./src/app/auth/auth.module.ts":
/*!*************************************!*\
  !*** ./src/app/auth/auth.module.ts ***!
  \*************************************/
/*! exports provided: AuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _store_reducers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./store/reducers */ "./src/app/auth/store/reducers/index.ts");
/* harmony import */ var _store_effects__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./store/effects */ "./src/app/auth/store/effects/index.ts");
/* harmony import */ var _auth_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./auth-routing.module */ "./src/app/auth/auth-routing.module.ts");
/* harmony import */ var _auth_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./auth.component */ "./src/app/auth/auth.component.ts");
/* harmony import */ var _containers_login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./containers/login/login.component */ "./src/app/auth/containers/login/login.component.ts");
/* harmony import */ var _containers_register_register_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./containers/register/register.component */ "./src/app/auth/containers/register/register.component.ts");











var AuthModule = /** @class */ (function () {
    function AuthModule() {
    }
    AuthModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _auth_component__WEBPACK_IMPORTED_MODULE_8__["AuthComponent"],
                _containers_login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"],
                _containers_register_register_component__WEBPACK_IMPORTED_MODULE_10__["RegisterComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _auth_routing_module__WEBPACK_IMPORTED_MODULE_7__["AuthRoutingModule"],
                _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["StoreModule"].forFeature('auth', _store_reducers__WEBPACK_IMPORTED_MODULE_5__["reducers"]),
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["EffectsModule"].forFeature(_store_effects__WEBPACK_IMPORTED_MODULE_6__["effects"]),
            ],
        })
    ], AuthModule);
    return AuthModule;
}());



/***/ }),

/***/ "./src/app/auth/containers/login/login.component.html":
/*!************************************************************!*\
  !*** ./src/app/auth/containers/login/login.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3 class=\"account-title\">Login</h3>\n<div class=\"account-box\">\n    <div class=\"account-wrapper\">\n        <div class=\"account-logo\">\n            <a href=\"#\"><img src=\"./assets/img/logo2.png\" alt=\"Preadmin\"></a>\n        </div>\n        <div>\n            <div class=\"form-group form-focus\">\n                <label class=\"control-label\" >Username or Email</label>\n                <input class=\"form-control floating\" #email type=\"text\" />\n            </div>\n            <div class=\"form-group form-focus\">\n                <label class=\"control-label\">Password</label>\n                <input class=\"form-control floating\" #password type=\"password\" />\n            </div>\n            <div class=\"form-group text-center\">\n                <button class=\"btn btn-primary btn-block account-btn\" (click)=\"login()\">Login</button>\n            </div>\n            <div class=\"text-center\">\n                <a routerLink=\"/auth/register\">Registration</a>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/auth/containers/login/login.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/auth/containers/login/login.component.ts ***!
  \**********************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _store_actions_login_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/actions/login.actions */ "./src/app/auth/store/actions/login.actions.ts");




var LoginComponent = /** @class */ (function () {
    function LoginComponent(store) {
        this.store = store;
    }
    LoginComponent.prototype.login = function () {
        var email = this.email.nativeElement.value;
        var password = this.password.nativeElement.value;
        if (email.length > 0 && password.length) {
            this.store.dispatch(new _store_actions_login_actions__WEBPACK_IMPORTED_MODULE_3__["Login"]({ email: email, password: password }));
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('email'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], LoginComponent.prototype, "email", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('password'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], LoginComponent.prototype, "password", void 0);
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/auth/containers/login/login.component.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/auth/containers/register/register.component.html":
/*!******************************************************************!*\
  !*** ./src/app/auth/containers/register/register.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3 class=\"account-title\">Register</h3>\n<div class=\"account-box\">\n    <div class=\"account-wrapper\">\n        <div class=\"account-logo\">\n            <a href=\"#\"><img src=\"./assets/img/logo2.png\" alt=\"Preadmin\"></a>\n        </div>\n        <div >\n        <div class=\"form-group form-focus\">\n            <label class=\"control-label\">Email</label>\n            <input class=\"form-control floating\" #email type=\"text\" />\n        </div>\n        <div class=\"form-group form-focus\">\n            <label class=\"control-label\">Password</label>\n            <input class=\"form-control floating\" #password type=\"password\" />\n        </div>\n        <div class=\"form-group form-focus\">\n            <label class=\"control-label\">Repeat Password</label>\n            <input class=\"form-control floating\" #password2 type=\"password\" />\n        </div>\n        <div class=\"form-group text-center\">\n            <button class=\"btn btn-primary btn-block account-btn\" (click)=\"register()\">Register</button>\n        </div>\n        <div class=\"text-center\">\n            <a routerLink=\"/auth/login\">Already have an account?</a>\n        </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/auth/containers/register/register.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/auth/containers/register/register.component.ts ***!
  \****************************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _store_actions_register_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/actions/register.actions */ "./src/app/auth/store/actions/register.actions.ts");




var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(store) {
        this.store = store;
    }
    RegisterComponent.prototype.ngOnInit = function () { };
    RegisterComponent.prototype.register = function () {
        var email = this.email.nativeElement.value;
        var password = this.password.nativeElement.value;
        var password2 = this.password2.nativeElement.value;
        if (email.length > 0 && password.length) {
            if (password === password2) {
                this.store.dispatch(new _store_actions_register_actions__WEBPACK_IMPORTED_MODULE_3__["Register"]({ email: email, password: password }));
            }
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('email'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], RegisterComponent.prototype, "email", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('password'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], RegisterComponent.prototype, "password", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('password2'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], RegisterComponent.prototype, "password2", void 0);
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/auth/containers/register/register.component.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/auth/store/actions/register.actions.ts":
/*!********************************************************!*\
  !*** ./src/app/auth/store/actions/register.actions.ts ***!
  \********************************************************/
/*! exports provided: ActionTypes, Register, RegisterSuccess, RegisterFail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionTypes", function() { return ActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Register", function() { return Register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterSuccess", function() { return RegisterSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterFail", function() { return RegisterFail; });
var ActionTypes;
(function (ActionTypes) {
    ActionTypes["REGISTER"] = "[Auth Component] REGISTER";
    ActionTypes["REGISTER_SUCCESS"] = "[Auth Component] REGISTER_SUCCESS";
    ActionTypes["REGISTER_FAIL"] = "[Auth Component] REGISTER_FAIL";
})(ActionTypes || (ActionTypes = {}));
var Register = /** @class */ (function () {
    function Register(payload) {
        this.payload = payload;
        this.type = ActionTypes.REGISTER;
    }
    return Register;
}());

var RegisterSuccess = /** @class */ (function () {
    function RegisterSuccess() {
        this.type = ActionTypes.REGISTER_SUCCESS;
    }
    return RegisterSuccess;
}());

var RegisterFail = /** @class */ (function () {
    function RegisterFail(payload) {
        this.payload = payload;
        this.type = ActionTypes.REGISTER_FAIL;
    }
    return RegisterFail;
}());



/***/ }),

/***/ "./src/app/auth/store/effects/index.ts":
/*!*********************************************!*\
  !*** ./src/app/auth/store/effects/index.ts ***!
  \*********************************************/
/*! exports provided: effects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "effects", function() { return effects; });
/* harmony import */ var _login_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.effects */ "./src/app/auth/store/effects/login.effects.ts");
/* harmony import */ var _register_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register.effects */ "./src/app/auth/store/effects/register.effects.ts");


var effects = [_login_effects__WEBPACK_IMPORTED_MODULE_0__["LoginEffects"], _register_effects__WEBPACK_IMPORTED_MODULE_1__["RegisterEffects"]];


/***/ }),

/***/ "./src/app/auth/store/effects/login.effects.ts":
/*!*****************************************************!*\
  !*** ./src/app/auth/store/effects/login.effects.ts ***!
  \*****************************************************/
/*! exports provided: LoginEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginEffects", function() { return LoginEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _actions_login_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../actions/login.actions */ "./src/app/auth/store/actions/login.actions.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/auth/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");








var LoginEffects = /** @class */ (function () {
    function LoginEffects(actions$, authService, router) {
        var _this = this;
        this.actions$ = actions$;
        this.authService = authService;
        this.router = router;
        this.login$ = this.actions$
            .pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_login_actions__WEBPACK_IMPORTED_MODULE_5__["ActionTypes"].LOGIN), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function (data) {
            return _this.authService.login(data.payload)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
                _this.router.navigate(['/employee']);
                return new _actions_login_actions__WEBPACK_IMPORTED_MODULE_5__["LoginSuccess"](res);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _actions_login_actions__WEBPACK_IMPORTED_MODULE_5__["LoginFail"](err.error.message)); }));
        }));
        this.logOut$ = this.actions$
            .pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_login_actions__WEBPACK_IMPORTED_MODULE_5__["ActionTypes"].LOGOUT), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function () {
            return _this.authService.logout()
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function () {
                _this.router.navigate(['/auth/login']);
                return new _actions_login_actions__WEBPACK_IMPORTED_MODULE_5__["LogOutSuccess"]();
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function () { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _actions_login_actions__WEBPACK_IMPORTED_MODULE_5__["LogOutFail"]()); }));
        }));
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], LoginEffects.prototype, "login$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], LoginEffects.prototype, "logOut$", void 0);
    LoginEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"], _services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]])
    ], LoginEffects);
    return LoginEffects;
}());



/***/ }),

/***/ "./src/app/auth/store/effects/register.effects.ts":
/*!********************************************************!*\
  !*** ./src/app/auth/store/effects/register.effects.ts ***!
  \********************************************************/
/*! exports provided: RegisterEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterEffects", function() { return RegisterEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _actions_register_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../actions/register.actions */ "./src/app/auth/store/actions/register.actions.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/auth/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");








var RegisterEffects = /** @class */ (function () {
    function RegisterEffects(actions$, authService, router) {
        var _this = this;
        this.actions$ = actions$;
        this.authService = authService;
        this.router = router;
        this.register = this.actions$
            .pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_register_actions__WEBPACK_IMPORTED_MODULE_5__["ActionTypes"].REGISTER), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function (data) { return _this.authService.register(data.payload)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function () {
            _this.router.navigate(['/auth/login']);
            return new _actions_register_actions__WEBPACK_IMPORTED_MODULE_5__["RegisterSuccess"]();
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _actions_register_actions__WEBPACK_IMPORTED_MODULE_5__["RegisterFail"](err.error.message)); })); }));
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], RegisterEffects.prototype, "register", void 0);
    RegisterEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"], _services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]])
    ], RegisterEffects);
    return RegisterEffects;
}());



/***/ }),

/***/ "./src/app/auth/store/reducers/index.ts":
/*!**********************************************!*\
  !*** ./src/app/auth/store/reducers/index.ts ***!
  \**********************************************/
/*! exports provided: reducers, getAuthState, getLoginState, getRegisterState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducers", function() { return reducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAuthState", function() { return getAuthState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLoginState", function() { return getLoginState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRegisterState", function() { return getRegisterState; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _login_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.reducer */ "./src/app/auth/store/reducers/login.reducer.ts");
/* harmony import */ var _register_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./register.reducer */ "./src/app/auth/store/reducers/register.reducer.ts");



var reducers = {
    login: _login_reducer__WEBPACK_IMPORTED_MODULE_1__["reducer"],
    register: _register_reducer__WEBPACK_IMPORTED_MODULE_2__["reducer"],
};
var getAuthState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])('auth');
var getLoginState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getAuthState, function (state) { return state.login; });
var getRegisterState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getAuthState, function (state) { return state.register; });


/***/ }),

/***/ "./src/app/auth/store/reducers/login.reducer.ts":
/*!******************************************************!*\
  !*** ./src/app/auth/store/reducers/login.reducer.ts ***!
  \******************************************************/
/*! exports provided: initialState, reducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _actions_login_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/login.actions */ "./src/app/auth/store/actions/login.actions.ts");


var initialState = {
    isLogetIn: false,
    error: null,
    email: null,
};
var reducer = function (state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case _actions_login_actions__WEBPACK_IMPORTED_MODULE_1__["ActionTypes"].LOGIN: {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { isLogetIn: false, error: null });
        }
        case _actions_login_actions__WEBPACK_IMPORTED_MODULE_1__["ActionTypes"].LOGIN_SUCCESS: {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { isLogetIn: true, error: null, email: action.payload.email });
        }
        case _actions_login_actions__WEBPACK_IMPORTED_MODULE_1__["ActionTypes"].LOGIN_FAIL: {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { isLogetIn: false, error: action.payload });
        }
        case _actions_login_actions__WEBPACK_IMPORTED_MODULE_1__["ActionTypes"].LOGOUT_SUCCESS: {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { isLogetIn: false, error: null });
        }
        default: {
            return state;
        }
    }
};


/***/ }),

/***/ "./src/app/auth/store/reducers/register.reducer.ts":
/*!*********************************************************!*\
  !*** ./src/app/auth/store/reducers/register.reducer.ts ***!
  \*********************************************************/
/*! exports provided: initialState, reducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _actions_register_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/register.actions */ "./src/app/auth/store/actions/register.actions.ts");


var initialState = {
    loading: false,
    error: null,
};
var reducer = function (state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case _actions_register_actions__WEBPACK_IMPORTED_MODULE_1__["ActionTypes"].REGISTER: {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { loading: true, error: null });
        }
        case _actions_register_actions__WEBPACK_IMPORTED_MODULE_1__["ActionTypes"].REGISTER_SUCCESS: {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { loading: false, error: null });
        }
        case _actions_register_actions__WEBPACK_IMPORTED_MODULE_1__["ActionTypes"].REGISTER_FAIL: {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { loading: false, error: action.payload });
        }
        default: {
            return state;
        }
    }
};


/***/ })

}]);
//# sourceMappingURL=auth-auth-module.js.map