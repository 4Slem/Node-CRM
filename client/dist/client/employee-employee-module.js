(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["employee-employee-module"],{

/***/ "./src/app/admin/employee/employee-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/admin/employee/employee-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: EmployeeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeRoutingModule", function() { return EmployeeRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _employee_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./employee.component */ "./src/app/admin/employee/employee.component.ts");




var routes = [
    { path: '', component: _employee_component__WEBPACK_IMPORTED_MODULE_3__["EmployeeComponent"], pathMatch: 'full' }
];
var EmployeeRoutingModule = /** @class */ (function () {
    function EmployeeRoutingModule() {
    }
    EmployeeRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], EmployeeRoutingModule);
    return EmployeeRoutingModule;
}());



/***/ }),

/***/ "./src/app/admin/employee/employee.component.html":
/*!********************************************************!*\
  !*** ./src/app/admin/employee/employee.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content container-fluid\" style=\"padding: 30px;\">\n    <div class=\"row\">\n        <div class=\"col-xs-4\">\n            <h4 class=\"page-title\">Employee</h4>\n        </div>\n        <div class=\"col-xs-8 text-right m-b-20\">\n            <a href=\"#\" class=\"btn btn-primary rounded pull-right\" data-toggle=\"modal\" data-target=\"#add_employee\" (click)=\"select()\"><i class=\"fa fa-plus\"></i> Add Employee</a>\n        </div>\n    </div>\n    <div class=\"row filter-row\">\n        <div class=\"col-sm-3 col-xs-6\">\n            <div class=\"form-group form-focus\">\n                <label class=\"control-label\">Employee Name</label>\n                <input type=\"text\"  #namesearch class=\"form-control floating\" />\n            </div>\n        </div>\n        <div class=\"col-sm-3 col-xs-6\">\n\n        </div>\n        <div class=\"col-sm-3 col-xs-6\">\n\n        </div>\n        <div class=\"col-sm-3 col-xs-6\">\n            <a (click)=\"getEmployee()\" class=\"btn btn-success btn-block\"> Search </a>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n            <div class=\"table-responsive\">\n                <table class=\"table table-striped custom-table datatable\" style=\"margin-bottom: 100px\">\n                    <thead>\n                    <tr>\n                        <th style=\"width:30%;\">Name</th>\n                        <th>Position</th>\n                        <th>Status</th>\n                        <th>Skills</th>\n                        <th class=\"text-right\">Action</th>\n                    </tr>\n                    </thead>\n                    <tbody *ngIf=\"allEmployee$ | async as allEmployee\">\n                    <tr *ngFor=\"let item of allEmployee\">\n                        <td>\n                            <a href=\"./profile.html\" class=\"avatar\">\n                                <img *ngIf=\"item.image\" [src]=\"'http://localhost:3000/'+item.image\" alt=\"\" style=\"width: 100%; display: block;\">\n                            </a>\n                            <h2><a>{{ item.name }} {{ item.surname }} <span *ngIf=\"item.department\">{{item.department.name}}</span></a></h2>\n                        </td>\n                        <td><span *ngIf=\"item.position\">{{item.position.name}}</span><span *ngIf=\"!item.position\">-</span></td>\n                        <td>\n                            <div class=\"dropdown action-label\">\n                                <a class=\"btn btn-white btn-sm rounded dropdown-toggle\" data-toggle=\"dropdown\" aria-expanded=\"false\">\n                                    <span *ngIf=\"item.active\"><i class=\"fa fa-dot-circle-o text-success\"></i> Active</span>\n                                    <span *ngIf=\"!item.active\"><i class=\"fa fa-dot-circle-o text-danger\"></i> Inactive</span>\n                                </a>\n                            </div>\n                        </td>\n                        <td>\n                            <div class=\"dropdown\" *ngIf=\"item.skills.length > 0\">\n                                <a style=\"min-width: 120px\" class=\"btn btn-white btn-sm rounded dropdown-toggle\" data-toggle=\"dropdown\" aria-expanded=\"false\">Show <i class=\"caret\"></i></a>\n                                <ul class=\"dropdown-menu\" style=\"min-width: 120px\">\n                                    <li style=\"min-width: 120px\" *ngFor=\"let s of item.skills\"><a href=\"#\">{{s.name}}</a></li>\n                                </ul>\n                            </div>\n                        </td>\n                        <td class=\"text-right\">\n                            <div class=\"dropdown\">\n                                <a href=\"#\" class=\"action-icon dropdown-toggle\" data-toggle=\"dropdown\" aria-expanded=\"false\"><i class=\"fa fa-ellipsis-v\"></i></a>\n                                <ul class=\"dropdown-menu pull-right\">\n                                    <li><a (click)=\"setItem(item)\" data-toggle=\"modal\" data-target=\"#edit_employee\"><i class=\"fa fa-pencil m-r-5\"></i> Edit</a></li>\n                                    <li><a (click)=\"setItem(item)\" data-toggle=\"modal\" data-target=\"#delete_employee\"><i class=\"fa fa-trash-o m-r-5\"></i> Delete</a></li>\n                                </ul>\n                            </div>\n                        </td>\n                    </tr>\n                    </tbody>\n                </table>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div id=\"edit_employee\" class=\"modal custom-modal fade\" role=\"dialog\" *ngIf=\"item\">\n    <div class=\"modal-dialog\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n        <div class=\"modal-content modal-lg\">\n            <div class=\"modal-header\">\n                <h4 class=\"modal-title\">Edit Employee</h4>\n            </div>\n            <div class=\"modal-body\">\n                <div class=\"m-b-30\">\n                    <div class=\"row\">\n                        <div class=\"col-sm-6\">\n                            <div class=\"form-group\">\n                                <label class=\"control-label\">Name <span class=\"text-danger\">*</span></label>\n                                <input class=\"form-control\" [value]=\"item.name\" #namee type=\"text\">\n                            </div>\n                        </div>\n                        <div class=\"col-sm-6\">\n                            <div class=\"form-group\">\n                                <label class=\"control-label\">SurName <span class=\"text-danger\">*</span></label>\n                                <input class=\"form-control\" #surnamee [value]=\"item.surname\" type=\"text\">\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-sm-6\">\n                            <div class=\"form-group\">\n                                <label class=\"control-label\">Department <span class=\"text-danger\">*</span></label>\n                                <div class=\"dropdown\" style=\"width: 100%\" *ngIf=\"department$ | async as department\">\n                                    <a class=\"btn btn-white  rounded dropdown-toggle\" data-toggle=\"dropdown\" aria-expanded=\"false\" style=\"width: 100%\">\n                                        {{item.department.name}}\n                                        <i class=\"caret\"></i>\n                                    </a>\n                                    <ul class=\"dropdown-menu\" style=\"width: 100%\">\n                                        <li *ngFor=\"let item of department\" style=\"width: 100%\" (click)=\"setDepartmente(item)\">\n                                            <a>{{ item.name }}</a>\n                                        </li>\n                                    </ul>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"col-sm-6\">\n                            <div class=\"form-group\">\n                                <label class=\"control-label\">Position <span class=\"text-danger\">*</span></label>\n                                <div class=\"dropdown\" style=\"width: 100%\" *ngIf=\"positions$ | async as position\">\n                                    <a class=\"btn btn-white  rounded dropdown-toggle\" data-toggle=\"dropdown\" aria-expanded=\"false\" style=\"width: 100%\">\n                                        {{item.position.name}}\n                                        <i class=\"caret\"></i>\n                                    </a>\n                                    <ul class=\"dropdown-menu\" style=\"width: 100%\">\n                                        <li *ngFor=\"let item of position\" style=\"width: 100%\" (click)=\"setPose(item)\">\n                                            <a>{{ item.name }}</a>\n                                        </li>\n                                    </ul>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-sm-6\">\n                            <div class=\"form-group\">\n                                <table class=\"table table-striped custom-table\">\n                                    <thead>\n                                    <tr>\n                                        <th>Skills</th>\n                                        <th></th>\n                                    </tr>\n                                    </thead>\n                                    <tbody *ngIf=\"skills$ | async as skills\">\n                                    <tr *ngFor=\"let item2 of skills\">\n                                        <td>{{ item2.name }}</td>\n                                        <td><input [value]=\"item2._id\" [checked]=\"check(item2)\" (change)=\"setSkillse($event, item2)\" type=\"checkbox\"></td>\n                                    </tr>\n                                    </tbody>\n                                </table>\n                            </div>\n                        </div>\n                        <div class=\"col-sm-6\">\n                            <div class=\"form-group\">\n                                <table class=\"table table-striped custom-table\">\n                                    <thead>\n                                    <tr>\n                                        <th>Status</th>\n                                        <th></th>\n                                    </tr>\n                                    </thead>\n                                    <tbody>\n                                    <tr>\n                                        <td>Active</td>\n                                        <td><input (click)=\"setActivee($event)\" type=\"checkbox\"></td>\n                                    </tr>\n                                    </tbody>\n                                </table>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"m-t-20 text-center\">\n                        <button class=\"btn btn-primary btn-lg\" data-dismiss=\"modal\" (click)=\"editConfirm(item)\">Create Employee</button>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<div id=\"delete_employee\" class=\"modal custom-modal fade\" role=\"dialog\">\n    <div class=\"modal-dialog\">\n        <div class=\"modal-content modal-md\">\n            <div class=\"modal-header\">\n                <h4 class=\"modal-title\">Delete Employee</h4>\n            </div>\n            <form>\n                <div class=\"modal-body card-box\">\n                    <p>Are you sure want to delete this?</p>\n                    <div class=\"m-t-20\"> <a class=\"btn btn-default\" data-dismiss=\"modal\">Close</a>\n                        <button data-dismiss=\"modal\"  class=\"btn btn-danger\" (click)=\"delete(item)\">Delete</button>\n                    </div>\n                </div>\n            </form>\n        </div>\n    </div>\n</div>\n<div id=\"add_employee\" class=\"modal custom-modal fade\" role=\"dialog\">\n    <div class=\"modal-dialog\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n        <div class=\"modal-content modal-lg\">\n            <div class=\"modal-header\">\n                <h4 class=\"modal-title\">Add Employee</h4>\n            </div>\n            <div class=\"modal-body\">\n                <div class=\"m-b-30\">\n                    <div class=\"row\">\n                        <div class=\"col-sm-6\">\n                            <div class=\"form-group\">\n                                <label class=\"control-label\">Name <span class=\"text-danger\">*</span></label>\n                                <input class=\"form-control\" #name type=\"text\">\n                            </div>\n                        </div>\n                        <div class=\"col-sm-6\">\n                            <div class=\"form-group\">\n                                <label class=\"control-label\">SurName <span class=\"text-danger\">*</span></label>\n                                <input class=\"form-control\" #surname type=\"text\">\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-sm-6\">\n                            <div class=\"form-group\">\n                                <label class=\"control-label\">Department <span class=\"text-danger\">*</span></label>\n                                <div class=\"dropdown\" style=\"width: 100%\" *ngIf=\"department$ | async as department\">\n                                    <a class=\"btn btn-white  rounded dropdown-toggle\" data-toggle=\"dropdown\" aria-expanded=\"false\" style=\"width: 100%\">Select <i class=\"caret\"></i></a>\n                                    <ul class=\"dropdown-menu\" style=\"width: 100%\">\n                                        <li *ngFor=\"let item of department\" style=\"width: 100%\" (click)=\"setDepartment(item)\">\n                                            <a>{{ item.name }}</a>\n                                        </li>\n                                    </ul>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"col-sm-6\">\n                            <div class=\"form-group\">\n                                <label class=\"control-label\">Position <span class=\"text-danger\">*</span></label>\n                                <div class=\"dropdown\" style=\"width: 100%\" *ngIf=\"positions$ | async as position\">\n                                    <a class=\"btn btn-white  rounded dropdown-toggle\" data-toggle=\"dropdown\" aria-expanded=\"false\" style=\"width: 100%\">Select <i class=\"caret\"></i></a>\n                                    <ul class=\"dropdown-menu\" style=\"width: 100%\">\n                                        <li *ngFor=\"let item of position\" style=\"width: 100%\" (click)=\"setPos(item)\">\n                                            <a>{{ item.name }}</a>\n                                        </li>\n                                    </ul>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-sm-6\">\n                            <div class=\"form-group\">\n                                <table class=\"table table-striped custom-table\">\n                                    <thead>\n                                        <tr>\n                                            <th>Skills</th>\n                                            <th></th>\n                                        </tr>\n                                    </thead>\n                                    <tbody *ngIf=\"skills$ | async as skills\">\n                                        <tr *ngFor=\"let item of skills\">\n                                            <td>{{ item.name }}</td>\n                                            <td><input [value]=\"item._id\" (change)=\"setSkills($event, item)\" type=\"checkbox\"></td>\n                                        </tr>\n                                    </tbody>\n                                </table>\n                            </div>\n                        </div>\n                        <div class=\"col-sm-6\">\n                            <div class=\"form-group\">\n                                <table class=\"table table-striped custom-table\">\n                                    <thead>\n                                    <tr>\n                                        <th>Status</th>\n                                        <th></th>\n                                    </tr>\n                                    </thead>\n                                    <tbody>\n                                        <tr>\n                                            <td>Active</td>\n                                            <td><input (click)=\"setActive($event)\" type=\"checkbox\"></td>\n                                        </tr>\n                                    </tbody>\n                                </table>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"m-t-20 text-center\">\n                        <button class=\"btn btn-primary btn-lg\" data-dismiss=\"modal\" (click)=\"createConfirm()\">Create Employee</button>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/admin/employee/employee.component.ts":
/*!******************************************************!*\
  !*** ./src/app/admin/employee/employee.component.ts ***!
  \******************************************************/
/*! exports provided: EmployeeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeComponent", function() { return EmployeeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./store/actions */ "./src/app/admin/employee/store/actions/index.ts");
/* harmony import */ var _store_selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./store/selectors */ "./src/app/admin/employee/store/selectors/index.ts");
/* harmony import */ var _settings_skill_store_selectors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../settings/skill/store/selectors */ "./src/app/admin/settings/skill/store/selectors/index.ts");
/* harmony import */ var _settings_position_store_selectors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../settings/position/store/selectors */ "./src/app/admin/settings/position/store/selectors/index.ts");
/* harmony import */ var _settings_department_store_selectors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../settings/department/store/selectors */ "./src/app/admin/settings/department/store/selectors/index.ts");
/* harmony import */ var _settings_skill_store_actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../settings/skill/store/actions */ "./src/app/admin/settings/skill/store/actions/index.ts");
/* harmony import */ var _settings_position_store_actions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../settings/position/store/actions */ "./src/app/admin/settings/position/store/actions/index.ts");
/* harmony import */ var _settings_department_store_actions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../settings/department/store/actions */ "./src/app/admin/settings/department/store/actions/index.ts");











var EmployeeComponent = /** @class */ (function () {
    function EmployeeComponent(store) {
        this.store = store;
        this.item = null;
        this.skills = {};
        this.department = null;
        this.position = null;
        this.skillse = {};
    }
    EmployeeComponent.prototype.ngOnInit = function () {
        this.getEmployee();
        this.allEmployee$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_store_selectors__WEBPACK_IMPORTED_MODULE_4__["selectAllEmployee"]));
    };
    EmployeeComponent.prototype.select = function () {
        this.store.dispatch(new _settings_skill_store_actions__WEBPACK_IMPORTED_MODULE_8__["getSkills"]());
        this.store.dispatch(new _settings_position_store_actions__WEBPACK_IMPORTED_MODULE_9__["getPositions"]());
        this.store.dispatch(new _settings_department_store_actions__WEBPACK_IMPORTED_MODULE_10__["getDepartments"]());
        this.skills$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_settings_skill_store_selectors__WEBPACK_IMPORTED_MODULE_5__["selectSkills"]));
        this.positions$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_settings_position_store_selectors__WEBPACK_IMPORTED_MODULE_6__["selectPositions"]));
        this.department$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_settings_department_store_selectors__WEBPACK_IMPORTED_MODULE_7__["selectDepartments"]));
    };
    EmployeeComponent.prototype.getEmployee = function () {
        var query = {};
        if (this.namesearch.nativeElement.value.length > 1) {
            query['name'] = this.namesearch.nativeElement.value;
        }
        this.store.dispatch(new _store_actions__WEBPACK_IMPORTED_MODULE_3__["getAllEmployee"](query));
    };
    EmployeeComponent.prototype.setItem = function (data) {
        this.item = data;
        this.select();
    };
    EmployeeComponent.prototype.createConfirm = function () {
        var name = this.name.nativeElement.value;
        var surname = this.surname.nativeElement.value;
        if (name && name.length > 1 && surname && surname.length > 1) {
            this.store.dispatch(new _store_actions__WEBPACK_IMPORTED_MODULE_3__["createEmployee"]({ name: name, surname: surname, department: this.department, position: this.position, skills: Object.keys(this.skills), active: this.active }));
        }
    };
    EmployeeComponent.prototype.editConfirm = function (data) {
        var name = this.namee.nativeElement.value;
        var surname = this.surnamee.nativeElement.value;
        if (name && name.length > 1 && surname && surname.length > 1) {
            this.store.dispatch(new _store_actions__WEBPACK_IMPORTED_MODULE_3__["editEmployee"]({ data: { name: name, surname: surname, department: this.departmente, position: this.positione, skills: Object.keys(this.skillse), active: this.activee }, id: data._id }));
        }
    };
    EmployeeComponent.prototype.delete = function (data) {
        this.store.dispatch(new _store_actions__WEBPACK_IMPORTED_MODULE_3__["deleteEmployee"](data._id));
    };
    EmployeeComponent.prototype.setDepartment = function (data) {
        this.department = data._id;
    };
    EmployeeComponent.prototype.setPos = function (data) {
        this.position = data._id;
    };
    EmployeeComponent.prototype.setSkills = function (e, data) {
        if (e.target.checked) {
            this.skills[data._id] = data._id;
        }
        else {
            delete this.skills[data._id];
        }
    };
    EmployeeComponent.prototype.setActive = function (e) {
        if (e.target.checked) {
            this.active = 1;
        }
        else {
            this.active = 0;
        }
    };
    EmployeeComponent.prototype.check = function (item) {
        for (var _i = 0, _a = this.item.skills; _i < _a.length; _i++) {
            var i = _a[_i];
            if (i._id == item._id)
                return true;
        }
    };
    EmployeeComponent.prototype.setDepartmente = function (data) {
        this.departmente = data._id;
    };
    EmployeeComponent.prototype.setPose = function (data) {
        this.positione = data._id;
    };
    EmployeeComponent.prototype.setSkillse = function (e, data) {
        if (e.target.checked) {
            this.skillse[data._id] = data._id;
        }
        else {
            delete this.skillse[data._id];
        }
    };
    EmployeeComponent.prototype.setActivee = function (e) {
        if (e.target.checked) {
            this.activee = 1;
        }
        else {
            this.activee = 0;
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('name'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], EmployeeComponent.prototype, "name", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('surname'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], EmployeeComponent.prototype, "surname", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('namee'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], EmployeeComponent.prototype, "namee", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('surnamee'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], EmployeeComponent.prototype, "surnamee", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('namesearch'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], EmployeeComponent.prototype, "namesearch", void 0);
    EmployeeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-employee',
            template: __webpack_require__(/*! ./employee.component.html */ "./src/app/admin/employee/employee.component.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
    ], EmployeeComponent);
    return EmployeeComponent;
}());



/***/ }),

/***/ "./src/app/admin/employee/employee.module.ts":
/*!***************************************************!*\
  !*** ./src/app/admin/employee/employee.module.ts ***!
  \***************************************************/
/*! exports provided: EmployeeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeModule", function() { return EmployeeModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _store_reducers_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./store/reducers/index */ "./src/app/admin/employee/store/reducers/index.ts");
/* harmony import */ var _store_effects_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./store/effects/index */ "./src/app/admin/employee/store/effects/index.ts");
/* harmony import */ var _employee_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./employee-routing.module */ "./src/app/admin/employee/employee-routing.module.ts");
/* harmony import */ var _employee_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./employee.component */ "./src/app/admin/employee/employee.component.ts");









var EmployeeModule = /** @class */ (function () {
    function EmployeeModule() {
    }
    EmployeeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _employee_component__WEBPACK_IMPORTED_MODULE_8__["EmployeeComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _employee_routing_module__WEBPACK_IMPORTED_MODULE_7__["EmployeeRoutingModule"],
                _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["StoreModule"].forFeature('employee', _store_reducers_index__WEBPACK_IMPORTED_MODULE_5__["reducer"]),
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["EffectsModule"].forFeature([_store_effects_index__WEBPACK_IMPORTED_MODULE_6__["AllEmployeeEffect"]]),
            ],
            providers: []
        })
    ], EmployeeModule);
    return EmployeeModule;
}());



/***/ }),

/***/ "./src/app/admin/employee/services/employee.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/admin/employee/services/employee.service.ts ***!
  \*************************************************************/
/*! exports provided: EmployeeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeService", function() { return EmployeeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var EmployeeService = /** @class */ (function () {
    function EmployeeService(http) {
        this.http = http;
    }
    EmployeeService.prototype.getAllEmployee = function (data) {
        return this.http.get('https://angular-node-mean-crm.herokuapp.com/api/employee', {
            params: data
        });
    };
    EmployeeService.prototype.deleteEmployee = function (data) {
        return this.http.delete("https://angular-node-mean-crm.herokuapp.com/api/employee/" + data);
    };
    EmployeeService.prototype.createEmployee = function (data) {
        return this.http.post("https://angular-node-mean-crm.herokuapp.com/api/employee", data);
    };
    EmployeeService.prototype.editEmployee = function (_a) {
        var data = _a.data, id = _a.id;
        return this.http.patch("https://angular-node-mean-crm.herokuapp.com/api/employee/" + id, data);
    };
    EmployeeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], EmployeeService);
    return EmployeeService;
}());



/***/ }),

/***/ "./src/app/admin/employee/store/actions/index.ts":
/*!*******************************************************!*\
  !*** ./src/app/admin/employee/store/actions/index.ts ***!
  \*******************************************************/
/*! exports provided: ActionTypes, getAllEmployee, getAllEmployeeSuccess, getAllEmployeeFail, getEmployee, getEmployeeSuccess, getEmployeeFail, editEmployee, editEmployeeSuccess, editEmployeeFail, deleteEmployee, deleteEmployeeSuccess, deleteEmployeeFail, createEmployee, createEmployeeSuccess, createEmployeeFail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionTypes", function() { return ActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllEmployee", function() { return getAllEmployee; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllEmployeeSuccess", function() { return getAllEmployeeSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllEmployeeFail", function() { return getAllEmployeeFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEmployee", function() { return getEmployee; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEmployeeSuccess", function() { return getEmployeeSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEmployeeFail", function() { return getEmployeeFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "editEmployee", function() { return editEmployee; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "editEmployeeSuccess", function() { return editEmployeeSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "editEmployeeFail", function() { return editEmployeeFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteEmployee", function() { return deleteEmployee; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteEmployeeSuccess", function() { return deleteEmployeeSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteEmployeeFail", function() { return deleteEmployeeFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createEmployee", function() { return createEmployee; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createEmployeeSuccess", function() { return createEmployeeSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createEmployeeFail", function() { return createEmployeeFail; });
var ActionTypes;
(function (ActionTypes) {
    ActionTypes["GET_ALL_EMPLOYEE"] = "[Employee Component] GET_ALL_EMPLOYEE";
    ActionTypes["GET_ALL_EMPLOYEE_SUCCESS"] = "[Employee Component] GET_ALL_EMPLOYEE_SUCCESS";
    ActionTypes["GET_ALL_EMPLOYEE_FAIL"] = "[Employee Component] GET_ALL_EMPLOYEE_FAIL";
    ActionTypes["GET_EMPLOYEE"] = "[Employee Component] GET_EMPLOYEE";
    ActionTypes["GET_EMPLOYEE_SUCCESS"] = "[Employee Component] GET_EMPLOYEE_SUCCESS";
    ActionTypes["GET_EMPLOYEE_FAIL"] = "[Employee Component] GET_EMPLOYEE_FAIL";
    ActionTypes["EDIT_EMPLOYEE"] = "[Employee Component] EDIT_EMPLOYEE";
    ActionTypes["EDIT_EMPLOYEE_SUCCESS"] = "[Employee Component] EDIT_EMPLOYEE_SUCCESS";
    ActionTypes["EDIT_EMPLOYEE_FAIL"] = "[Employee Component] EDIT_EMPLOYEE_FAIL";
    ActionTypes["DELETE_EMPLOYEE"] = "[Employee Component] DELETE_EMPLOYEE";
    ActionTypes["DELETE_EMPLOYEE_SUCCESS"] = "[Employee Component] DELETE_EMPLOYEE_SUCCESS";
    ActionTypes["DELETE_EMPLOYEE_FAIL"] = "[Employee Component] DELETE_EMPLOYEE_FAIL";
    ActionTypes["CREATE_EMPLOYEE"] = "[Employee Component] CREATE_EMPLOYEE";
    ActionTypes["CREATE_EMPLOYEE_SUCCESS"] = "[Employee Component] CREATE_EMPLOYEE_SUCCESS";
    ActionTypes["CREATE_EMPLOYEE_FAIL"] = "[Employee Component] CREATE_EMPLOYEE_FAIL";
})(ActionTypes || (ActionTypes = {}));
var getAllEmployee = /** @class */ (function () {
    function getAllEmployee(payload) {
        this.payload = payload;
        this.type = ActionTypes.GET_ALL_EMPLOYEE;
    }
    return getAllEmployee;
}());

var getAllEmployeeSuccess = /** @class */ (function () {
    function getAllEmployeeSuccess(payload) {
        this.payload = payload;
        this.type = ActionTypes.GET_ALL_EMPLOYEE_SUCCESS;
    }
    return getAllEmployeeSuccess;
}());

var getAllEmployeeFail = /** @class */ (function () {
    function getAllEmployeeFail(payload) {
        this.payload = payload;
        this.type = ActionTypes.GET_ALL_EMPLOYEE_FAIL;
    }
    return getAllEmployeeFail;
}());

var getEmployee = /** @class */ (function () {
    function getEmployee(payload) {
        this.payload = payload;
        this.type = ActionTypes.GET_EMPLOYEE;
    }
    return getEmployee;
}());

var getEmployeeSuccess = /** @class */ (function () {
    function getEmployeeSuccess(payload) {
        this.payload = payload;
        this.type = ActionTypes.GET_EMPLOYEE_SUCCESS;
    }
    return getEmployeeSuccess;
}());

var getEmployeeFail = /** @class */ (function () {
    function getEmployeeFail(payload) {
        this.payload = payload;
        this.type = ActionTypes.GET_EMPLOYEE_FAIL;
    }
    return getEmployeeFail;
}());

var editEmployee = /** @class */ (function () {
    function editEmployee(payload) {
        this.payload = payload;
        this.type = ActionTypes.EDIT_EMPLOYEE;
    }
    return editEmployee;
}());

var editEmployeeSuccess = /** @class */ (function () {
    function editEmployeeSuccess(payload) {
        this.payload = payload;
        this.type = ActionTypes.EDIT_EMPLOYEE_SUCCESS;
    }
    return editEmployeeSuccess;
}());

var editEmployeeFail = /** @class */ (function () {
    function editEmployeeFail(payload) {
        this.payload = payload;
        this.type = ActionTypes.EDIT_EMPLOYEE_FAIL;
    }
    return editEmployeeFail;
}());

var deleteEmployee = /** @class */ (function () {
    function deleteEmployee(payload) {
        this.payload = payload;
        this.type = ActionTypes.DELETE_EMPLOYEE;
    }
    return deleteEmployee;
}());

var deleteEmployeeSuccess = /** @class */ (function () {
    function deleteEmployeeSuccess(payload) {
        this.payload = payload;
        this.type = ActionTypes.DELETE_EMPLOYEE_SUCCESS;
    }
    return deleteEmployeeSuccess;
}());

var deleteEmployeeFail = /** @class */ (function () {
    function deleteEmployeeFail(payload) {
        this.payload = payload;
        this.type = ActionTypes.DELETE_EMPLOYEE_FAIL;
    }
    return deleteEmployeeFail;
}());

var createEmployee = /** @class */ (function () {
    function createEmployee(payload) {
        this.payload = payload;
        this.type = ActionTypes.CREATE_EMPLOYEE;
    }
    return createEmployee;
}());

var createEmployeeSuccess = /** @class */ (function () {
    function createEmployeeSuccess(payload) {
        this.payload = payload;
        this.type = ActionTypes.CREATE_EMPLOYEE_SUCCESS;
    }
    return createEmployeeSuccess;
}());

var createEmployeeFail = /** @class */ (function () {
    function createEmployeeFail(payload) {
        this.payload = payload;
        this.type = ActionTypes.CREATE_EMPLOYEE_FAIL;
    }
    return createEmployeeFail;
}());



/***/ }),

/***/ "./src/app/admin/employee/store/effects/index.ts":
/*!*******************************************************!*\
  !*** ./src/app/admin/employee/store/effects/index.ts ***!
  \*******************************************************/
/*! exports provided: AllEmployeeEffect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllEmployeeEffect", function() { return AllEmployeeEffect; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../actions */ "./src/app/admin/employee/store/actions/index.ts");
/* harmony import */ var _services_employee_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/employee.service */ "./src/app/admin/employee/services/employee.service.ts");







var AllEmployeeEffect = /** @class */ (function () {
    function AllEmployeeEffect(actions$, skillsService) {
        var _this = this;
        this.actions$ = actions$;
        this.skillsService = skillsService;
        this.getAllEmployee$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions__WEBPACK_IMPORTED_MODULE_5__["ActionTypes"].GET_ALL_EMPLOYEE), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (data) { return _this.skillsService.getAllEmployee(data.payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return new _actions__WEBPACK_IMPORTED_MODULE_5__["getAllEmployeeSuccess"](res); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(new _actions__WEBPACK_IMPORTED_MODULE_5__["getEmployeeFail"](error)); })); }));
        this.createEmployee$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions__WEBPACK_IMPORTED_MODULE_5__["ActionTypes"].CREATE_EMPLOYEE), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (data) { return _this.skillsService.createEmployee(data.payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return new _actions__WEBPACK_IMPORTED_MODULE_5__["createEmployeeSuccess"](res); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(new _actions__WEBPACK_IMPORTED_MODULE_5__["createEmployeeFail"](error)); })); }));
        this.deleteEmployee$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions__WEBPACK_IMPORTED_MODULE_5__["ActionTypes"].DELETE_EMPLOYEE), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (data) { return _this.skillsService.deleteEmployee(data.payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function () { return new _actions__WEBPACK_IMPORTED_MODULE_5__["deleteEmployeeSuccess"](data.payload); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(new _actions__WEBPACK_IMPORTED_MODULE_5__["deleteEmployeeFail"](error)); })); }));
        this.editEmployee$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions__WEBPACK_IMPORTED_MODULE_5__["ActionTypes"].EDIT_EMPLOYEE), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (data) { return _this.skillsService.editEmployee(data.payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return new _actions__WEBPACK_IMPORTED_MODULE_5__["editEmployeeSuccess"](res); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(new _actions__WEBPACK_IMPORTED_MODULE_5__["deleteEmployeeFail"](error)); })); }));
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AllEmployeeEffect.prototype, "getAllEmployee$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AllEmployeeEffect.prototype, "createEmployee$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AllEmployeeEffect.prototype, "deleteEmployee$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AllEmployeeEffect.prototype, "editEmployee$", void 0);
    AllEmployeeEffect = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"], _services_employee_service__WEBPACK_IMPORTED_MODULE_6__["EmployeeService"]])
    ], AllEmployeeEffect);
    return AllEmployeeEffect;
}());



/***/ }),

/***/ "./src/app/admin/employee/store/reducers/index.ts":
/*!********************************************************!*\
  !*** ./src/app/admin/employee/store/reducers/index.ts ***!
  \********************************************************/
/*! exports provided: reducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ngrx_entity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/entity */ "./node_modules/@ngrx/entity/fesm5/entity.js");
/* harmony import */ var _actions_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/index */ "./src/app/admin/employee/store/actions/index.ts");



var adapter = Object(_ngrx_entity__WEBPACK_IMPORTED_MODULE_1__["createEntityAdapter"])({
    selectId: function (state) { return state._id; },
    sortComparer: function (dataA, dataB) { return dataA.name.localeCompare(dataB.name); },
});
var initialState = adapter.getInitialState({
    loading: false,
    deletePending: false,
    createPending: false,
    editPending: false,
    error: null,
    deleteError: null,
    createErrors: [],
    editErrors: [],
    loaded: false,
});
var reducer = function (state, action) {
    if (state === void 0) { state = initialState; }
    var _a;
    switch (action.type) {
        case _actions_index__WEBPACK_IMPORTED_MODULE_2__["ActionTypes"].GET_ALL_EMPLOYEE: {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { loading: true, error: null });
        }
        case _actions_index__WEBPACK_IMPORTED_MODULE_2__["ActionTypes"].GET_ALL_EMPLOYEE_SUCCESS: {
            return adapter.addAll(action.payload, tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { loading: false, error: null, loaded: true }));
        }
        case _actions_index__WEBPACK_IMPORTED_MODULE_2__["ActionTypes"].GET_ALL_EMPLOYEE_FAIL: {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { loading: false, error: action.payload });
        }
        case _actions_index__WEBPACK_IMPORTED_MODULE_2__["ActionTypes"].DELETE_EMPLOYEE: {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { deletePending: true, deleteError: null });
        }
        case _actions_index__WEBPACK_IMPORTED_MODULE_2__["ActionTypes"].DELETE_EMPLOYEE_SUCCESS: {
            var newState = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { deletePending: false, deleteError: null });
            return adapter.removeOne(action.payload, newState);
        }
        case _actions_index__WEBPACK_IMPORTED_MODULE_2__["ActionTypes"].DELETE_EMPLOYEE_FAIL: {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { deletePending: false, deleteError: action.payload });
        }
        case _actions_index__WEBPACK_IMPORTED_MODULE_2__["ActionTypes"].CREATE_EMPLOYEE: {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { createPending: true, createErrors: [] });
        }
        case _actions_index__WEBPACK_IMPORTED_MODULE_2__["ActionTypes"].CREATE_EMPLOYEE_SUCCESS: {
            return adapter.addOne(action.payload, tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { createPending: false, createErrors: [] }));
        }
        case _actions_index__WEBPACK_IMPORTED_MODULE_2__["ActionTypes"].CREATE_EMPLOYEE_FAIL: {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { createPending: false, createErrors: action.payload });
        }
        case _actions_index__WEBPACK_IMPORTED_MODULE_2__["ActionTypes"].EDIT_EMPLOYEE: {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { editPending: true, editErrors: [] });
        }
        case _actions_index__WEBPACK_IMPORTED_MODULE_2__["ActionTypes"].EDIT_EMPLOYEE_SUCCESS: {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { editPending: false, editErrors: [], entities: tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state.entities, (_a = {}, _a[action.payload._id] = action.payload, _a)) });
        }
        case _actions_index__WEBPACK_IMPORTED_MODULE_2__["ActionTypes"].EDIT_EMPLOYEE_FAIL: {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { editPending: false, editErrors: action.payload });
        }
        // case ActionTypes.GET_EMPLOYEE: {
        //   return {
        //     ...state,
        //     loading: true,
        //     error: null,
        //   };
        // }
        // case ActionTypes.GET_EMPLOYEE_SUCCESS: {
        //   return {
        //     ...state,
        //     loading: false,
        //     EMPLOYEE: action.payload,
        //     error: null,
        //   }
        // }
        // case ActionTypes.GET_EMPLOYEE_FAIL: {
        //   return {
        //     ...state,
        //     loading: false,
        //     error: action.payload
        //   }
        // }
        default: {
            return state;
        }
    }
};


/***/ }),

/***/ "./src/app/admin/employee/store/selectors/index.ts":
/*!*********************************************************!*\
  !*** ./src/app/admin/employee/store/selectors/index.ts ***!
  \*********************************************************/
/*! exports provided: selectAllEmployeeState, selectAllEmployee, selectLoading, selectError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectAllEmployeeState", function() { return selectAllEmployeeState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectAllEmployee", function() { return selectAllEmployee; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectLoading", function() { return selectLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectError", function() { return selectError; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");

var selectAllEmployeeState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])('employee');
var selectAllEmployee = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectAllEmployeeState, function (state) {
    return Object.keys(state.entities).map(function (item) { return state.entities[item]; });
});
var selectLoading = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectAllEmployeeState, function (state) {
    return state.loading;
});
var selectError = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectAllEmployeeState, function (state) {
    return state.error;
});


/***/ })

}]);
//# sourceMappingURL=employee-employee-module.js.map