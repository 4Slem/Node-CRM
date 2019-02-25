(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["settings-settings-module"],{

/***/ "./src/app/admin/settings/setting.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/admin/settings/setting.component.ts ***!
  \*****************************************************/
/*! exports provided: SettingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingComponent", function() { return SettingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SettingComponent = /** @class */ (function () {
    function SettingComponent() {
    }
    SettingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-settings',
            template: __webpack_require__(/*! ./settings.component.html */ "./src/app/admin/settings/settings.component.html")
        })
    ], SettingComponent);
    return SettingComponent;
}());



/***/ }),

/***/ "./src/app/admin/settings/settings-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/admin/settings/settings-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: SettingsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsRoutingModule", function() { return SettingsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _setting_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./setting.component */ "./src/app/admin/settings/setting.component.ts");




var routes = [
    { path: '', component: _setting_component__WEBPACK_IMPORTED_MODULE_3__["SettingComponent"], children: [
            { path: 'position', loadChildren: './position/position.module#PositionModule' },
            { path: 'department', loadChildren: './department/department.module#DepartmentModule' },
            { path: 'skill', loadChildren: './skill/skill.module#SkillModule' },
            { path: '', pathMatch: 'full', redirectTo: 'department' },
        ]
    },
];
var SettingsRoutingModule = /** @class */ (function () {
    function SettingsRoutingModule() {
    }
    SettingsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], SettingsRoutingModule);
    return SettingsRoutingModule;
}());



/***/ }),

/***/ "./src/app/admin/settings/settings.component.html":
/*!********************************************************!*\
  !*** ./src/app/admin/settings/settings.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"chat-main-row\" style=\"margin-top: 60px\">\n    <div class=\"chat-main-wrapper\">\n        <div class=\"col-xs-12 message-view\">\n            <div class=\"chat-window\">\n                <div class=\"fixed-header\">\n                    <div class=\"row\">\n                        <div class=\"col-xs-6\">\n                            <h4 class=\"page-title m-b-0 m-t-5\">Settings</h4>\n                        </div>\n                        <div class=\"col-xs-6\">\n                            <div class=\"navbar\">\n\n                                <div class=\"search-box m-t-0\">\n                                    <div class=\"input-group input-group-sm\">\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"chat-contents\">\n                    <div class=\"chat-content-wrap\">\n                        <div class=\"chat-wrap-inner\">\n                            <div class=\"contact-box clearfix\">\n                                <div class=\"contact-cat col-xs-12 col-sm-4 col-lg-3\">\n                                    <div class=\"roles-menu\">\n                                        <ul class=\"nav\">\n                                            <li routerLinkActive=\"active\"><a routerLink=\"department\">Department</a></li>\n                                            <li routerLinkActive=\"active\"><a routerLink=\"position\">Positions</a></li>\n                                            <li routerLinkActive=\"active\"><a routerLink=\"skill\">Skills</a></li>\n                                        </ul>\n                                    </div>\n                                </div>\n                                <router-outlet></router-outlet>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/admin/settings/settings.module.ts":
/*!***************************************************!*\
  !*** ./src/app/admin/settings/settings.module.ts ***!
  \***************************************************/
/*! exports provided: SettingsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsModule", function() { return SettingsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _settings_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./settings-routing.module */ "./src/app/admin/settings/settings-routing.module.ts");
/* harmony import */ var _setting_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./setting.component */ "./src/app/admin/settings/setting.component.ts");





var SettingsModule = /** @class */ (function () {
    function SettingsModule() {
    }
    SettingsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _settings_routing_module__WEBPACK_IMPORTED_MODULE_3__["SettingsRoutingModule"],
            ],
            declarations: [
                _setting_component__WEBPACK_IMPORTED_MODULE_4__["SettingComponent"]
            ]
        })
    ], SettingsModule);
    return SettingsModule;
}());



/***/ })

}]);
//# sourceMappingURL=settings-settings-module.js.map