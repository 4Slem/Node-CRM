(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin-admin-module"],{

/***/ "./src/app/admin/admin-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/admin/admin-routing.module.ts ***!
  \***********************************************/
/*! exports provided: AdminRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminRoutingModule", function() { return AdminRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _admin_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./admin.component */ "./src/app/admin/admin.component.ts");




var routes = [
    { path: '', component: _admin_component__WEBPACK_IMPORTED_MODULE_3__["AdminComponent"], children: [
            { path: 'employee', loadChildren: './employee/employee.module#EmployeeModule' },
            { path: 'settings', loadChildren: './settings/settings.module#SettingsModule' },
            { path: '', pathMatch: 'full', redirectTo: 'settings' },
        ]
    }
];
var AdminRoutingModule = /** @class */ (function () {
    function AdminRoutingModule() {
    }
    AdminRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], AdminRoutingModule);
    return AdminRoutingModule;
}());



/***/ }),

/***/ "./src/app/admin/admin.component.html":
/*!********************************************!*\
  !*** ./src/app/admin/admin.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-wrapper\">\n    <div class=\"header\">\n        <div class=\"header-left\">\n            <a class=\"logo\">\n                <img src=\"./assets/img/logo.png\" width=\"40\" height=\"40\" alt=\"\" />\n            </a>\n        </div>\n        <div class=\"page-title-box pull-left\">\n            <h3>CRM - MEAN</h3>\n        </div>\n        <a id=\"mobile_btn\" class=\"mobile_btn pull-left\" href=\"#sidebar\"><i class=\"fa fa-bars\" aria-hidden=\"true\"></i></a>\n        <ul class=\"nav navbar-nav navbar-right user-menu pull-right\">\n            <li class=\"dropdown\">\n                <a href=\"./profile.html\" class=\"dropdown-toggle user-link\" data-toggle=\"dropdown\" title=\"Admin\">\n                        <span class=\"user-img\"><img class=\"img-circle\" src=\"./assets/img/user.jpg\" width=\"40\" alt=\"Admin\" />\n\t\t\t\t\t\t\t<span class=\"status online\"></span></span>\n                    <span>Admin</span>\n                    <i class=\"caret\"></i>\n                </a>\n                <ul class=\"dropdown-menu\">\n                    <li (click)=\"logout()\"><a>Logout</a></li>\n                </ul>\n            </li>\n        </ul>\n        <div class=\"dropdown mobile-user-menu pull-right\">\n            <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" aria-expanded=\"false\"><i class=\"fa fa-ellipsis-v\"></i></a>\n            <ul class=\"dropdown-menu pull-right\">\n                <li><a href=\"./profile.html\">My Profile</a></li>\n                <li><a href=\"./edit-profile.html\">Edit Profile</a></li>\n                <li><a href=\"./settings.html\">Settings</a></li>\n                <li><a href=\"./login.html\">Logout</a></li>\n            </ul>\n        </div>\n    </div>\n    <div class=\"sidebar\" id=\"sidebar\">\n        <div class=\"sidebar-inner slimscroll\">\n            <div id=\"sidebar-menu\" class=\"sidebar-menu\">\n                <ul>\n                    <li class=\"menu-title\">Main</li>\n                    <li routerLinkActive=\"active\">\n                        <a routerLink=\"/employee\"><i class=\"fa fa-address-card\" aria-hidden=\"true\"></i> Users</a>\n                    </li>\n                    <li routerLinkActive=\"active\">\n                        <a routerLink=\"/settings\"><i class=\"fa fa-cog\" aria-hidden=\"true\"></i> Settings</a>\n                    </li>\n                </ul>\n            </div>\n        </div>\n    </div>\n    <div class=\"page-wrapper\" style=\"min-height: 100vh\">\n        <router-outlet></router-outlet>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/admin/admin.component.ts":
/*!******************************************!*\
  !*** ./src/app/admin/admin.component.ts ***!
  \******************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _auth_store_actions_login_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth/store/actions/login.actions */ "./src/app/auth/store/actions/login.actions.ts");




var AdminComponent = /** @class */ (function () {
    function AdminComponent(store) {
        this.store = store;
    }
    AdminComponent.prototype.ngOnInit = function () {
    };
    ;
    AdminComponent.prototype.logout = function () {
        this.store.dispatch(new _auth_store_actions_login_actions__WEBPACK_IMPORTED_MODULE_3__["LogOut"]());
    };
    AdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin',
            template: __webpack_require__(/*! ./admin.component.html */ "./src/app/admin/admin.component.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "./src/app/admin/admin.module.ts":
/*!***************************************!*\
  !*** ./src/app/admin/admin.module.ts ***!
  \***************************************/
/*! exports provided: AdminModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminModule", function() { return AdminModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _admin_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./admin-routing.module */ "./src/app/admin/admin-routing.module.ts");
/* harmony import */ var _admin_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./admin.component */ "./src/app/admin/admin.component.ts");





var AdminModule = /** @class */ (function () {
    function AdminModule() {
    }
    AdminModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _admin_component__WEBPACK_IMPORTED_MODULE_4__["AdminComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _admin_routing_module__WEBPACK_IMPORTED_MODULE_3__["AdminRoutingModule"],
            ],
            providers: []
        })
    ], AdminModule);
    return AdminModule;
}());



/***/ })

}]);
//# sourceMappingURL=admin-admin-module.js.map