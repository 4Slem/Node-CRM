(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["department-department-module"],{

/***/ "./src/app/admin/settings/department/department-routing.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/admin/settings/department/department-routing.module.ts ***!
  \************************************************************************/
/*! exports provided: DepartmentRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DepartmentRoutingModule", function() { return DepartmentRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _department_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./department.component */ "./src/app/admin/settings/department/department.component.ts");




var routes = [
    { path: '', component: _department_component__WEBPACK_IMPORTED_MODULE_3__["DepartmentComponent"], pathMatch: 'full' }
];
var DepartmentRoutingModule = /** @class */ (function () {
    function DepartmentRoutingModule() {
    }
    DepartmentRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], DepartmentRoutingModule);
    return DepartmentRoutingModule;
}());



/***/ }),

/***/ "./src/app/admin/settings/department/department.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/admin/settings/department/department.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"contacts-list col-xs-12 col-sm-8 col-lg-9\">\n    <a href=\"#\" class=\"btn btn-primary rounded \" data-toggle=\"modal\" data-target=\"#add_skill\"><i class=\"fa fa-plus\"></i> Add Department</a>\n\n    <ul class=\"contact-list\" *ngIf=\"department$ | async as data\">\n        <li *ngFor=\"let item of data\">\n            <div class=\"contact-cont\">\n                <div class=\"contact-info\">\n                    <span class=\"contact-name text-ellipsis\">{{ item.name }}</span>\n                </div>\n                <ul class=\"contact-action\">\n                    <li class=\"dropdown\">\n                        <a href=\"./contacts.html\" class=\"dropdown-toggle action-icon\" data-toggle=\"dropdown\" aria-expanded=\"false\"><i class=\"fa fa-ellipsis-v\"></i></a>\n                        <ul class=\"dropdown-menu\">\n                            <li><a  data-toggle=\"modal\" data-target=\"#edit_skill\" (click)=\"setItem(item)\">Edit</a></li>\n                            <li><a  data-toggle=\"modal\" data-target=\"#delete_skill\" (click)=\"setItem(item)\">Delete</a></li>\n                        </ul>\n                    </li>\n                </ul>\n            </div>\n        </li>\n    </ul>\n</div>\n\n<div id=\"add_skill\" class=\"modal custom-modal fade\" role=\"dialog\">\n    <div class=\"modal-dialog\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n        <div class=\"modal-content modal-lg\">\n            <div class=\"modal-header\">\n                <h4 class=\"modal-title\">Add Department</h4>\n            </div>\n            <div class=\"modal-body\">\n                <div class=\"m-b-30\">\n                    <div class=\"row\">\n                        <div class=\"col-sm-12\">\n                            <div class=\"form-group\">\n                                <label class=\"control-label\">Name <span class=\"text-danger\">*</span></label>\n                                <input class=\"form-control\" #create type=\"text\">\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"m-t-20 text-center\">\n                        <button class=\"btn btn-primary btn-lg\" data-dismiss=\"modal\" (click)=\"createConfirm()\">Create Department</button>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<div id=\"edit_skill\" class=\"modal custom-modal fade\" role=\"dialog\">\n    <div class=\"modal-dialog\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n        <div class=\"modal-content modal-lg\">\n            <div class=\"modal-header\">\n                <h4 class=\"modal-title\">Edit Department</h4>\n            </div>\n            <div class=\"modal-body\">\n                <div class=\"m-b-30\">\n                    <div class=\"row\">\n                        <div class=\"col-sm-12\">\n                            <div class=\"form-group\">\n                                <label class=\"control-label\">Name <span class=\"text-danger\">*</span></label>\n                                <input class=\"form-control\" [value]=\"item.name\" #edit type=\"text\">\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"m-t-20 text-center\">\n                        <button class=\"btn btn-primary btn-lg\" data-dismiss=\"modal\" (click)=\"editConfirm(item)\">Update Department</button>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<div id=\"delete_skill\" class=\"modal custom-modal fade\" role=\"dialog\">\n    <div class=\"modal-dialog\">\n        <div class=\"modal-content modal-md\">\n            <div class=\"modal-header\">\n                <h4 class=\"modal-title\">Delete Department</h4>\n            </div>\n            <form>\n                <div class=\"modal-body card-box\">\n                    <p>Are you sure want to delete this?</p>\n                    <div class=\"m-t-20\"> <a class=\"btn btn-default\" data-dismiss=\"modal\">Close</a>\n                        <button data-dismiss=\"modal\"  class=\"btn btn-danger\" (click)=\"delete(item)\">Delete</button>\n                    </div>\n                </div>\n            </form>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/admin/settings/department/department.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/admin/settings/department/department.component.ts ***!
  \*******************************************************************/
/*! exports provided: DepartmentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DepartmentComponent", function() { return DepartmentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _store_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./store/selectors */ "./src/app/admin/settings/department/store/selectors/index.ts");
/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./store/actions */ "./src/app/admin/settings/department/store/actions/index.ts");





var DepartmentComponent = /** @class */ (function () {
    function DepartmentComponent(store) {
        this.store = store;
        this.item = { name: '' };
    }
    DepartmentComponent.prototype.ngOnInit = function () {
        this.department$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_store_selectors__WEBPACK_IMPORTED_MODULE_3__["selectDepartments"]));
        this.store.dispatch(new _store_actions__WEBPACK_IMPORTED_MODULE_4__["getDepartments"]());
    };
    DepartmentComponent.prototype.setItem = function (data) {
        this.item = data;
    };
    DepartmentComponent.prototype.createConfirm = function () {
        var data = this.create.nativeElement.value;
        if (data && data.length > 1) {
            this.store.dispatch(new _store_actions__WEBPACK_IMPORTED_MODULE_4__["createDepartment"]({ name: data }));
        }
        this.create.nativeElement.value = '';
    };
    DepartmentComponent.prototype.editConfirm = function (data) {
        var name = this.edit.nativeElement.value;
        if (name && name.length > 1) {
            var newState = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, data, { name: name });
            this.store.dispatch(new _store_actions__WEBPACK_IMPORTED_MODULE_4__["editDepartment"]({ data: newState, id: data._id }));
        }
        this.edit.nativeElement.value = this.item.name;
    };
    DepartmentComponent.prototype.delete = function (data) {
        this.store.dispatch(new _store_actions__WEBPACK_IMPORTED_MODULE_4__["deleteDepartment"](data._id));
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('create'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], DepartmentComponent.prototype, "create", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('edit'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], DepartmentComponent.prototype, "edit", void 0);
    DepartmentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-department',
            template: __webpack_require__(/*! ./department.component.html */ "./src/app/admin/settings/department/department.component.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
    ], DepartmentComponent);
    return DepartmentComponent;
}());



/***/ }),

/***/ "./src/app/admin/settings/department/department.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/admin/settings/department/department.module.ts ***!
  \****************************************************************/
/*! exports provided: DepartmentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DepartmentModule", function() { return DepartmentModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _store_reducers_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./store/reducers/index */ "./src/app/admin/settings/department/store/reducers/index.ts");
/* harmony import */ var _store_effects_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./store/effects/index */ "./src/app/admin/settings/department/store/effects/index.ts");
/* harmony import */ var _department_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./department-routing.module */ "./src/app/admin/settings/department/department-routing.module.ts");
/* harmony import */ var _department_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./department.component */ "./src/app/admin/settings/department/department.component.ts");









var DepartmentModule = /** @class */ (function () {
    function DepartmentModule() {
    }
    DepartmentModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _department_component__WEBPACK_IMPORTED_MODULE_8__["DepartmentComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _department_routing_module__WEBPACK_IMPORTED_MODULE_7__["DepartmentRoutingModule"],
                _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["StoreModule"].forFeature('department', _store_reducers_index__WEBPACK_IMPORTED_MODULE_5__["reducer"]),
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["EffectsModule"].forFeature([_store_effects_index__WEBPACK_IMPORTED_MODULE_6__["DepartmentsEffect"]]),
            ],
            providers: []
        })
    ], DepartmentModule);
    return DepartmentModule;
}());



/***/ }),

/***/ "./src/app/admin/settings/department/services/department.service.ts":
/*!**************************************************************************!*\
  !*** ./src/app/admin/settings/department/services/department.service.ts ***!
  \**************************************************************************/
/*! exports provided: DepartmentsServices */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DepartmentsServices", function() { return DepartmentsServices; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var DepartmentsServices = /** @class */ (function () {
    function DepartmentsServices(http) {
        this.http = http;
    }
    DepartmentsServices.prototype.getDepartments = function () {
        return this.http.get('https://crm-mean.herokuapp.com/api/department');
    };
    DepartmentsServices.prototype.deleteDepartment = function (data) {
        return this.http.delete("https://crm-mean.herokuapp.com/api/department/" + data);
    };
    DepartmentsServices.prototype.createDepartment = function (data) {
        return this.http.post("https://crm-mean.herokuapp.com/api/department", data);
    };
    DepartmentsServices.prototype.editDepartment = function (_a) {
        var data = _a.data, id = _a.id;
        return this.http.patch("https://crm-mean.herokuapp.com/api/department/" + id, data);
    };
    DepartmentsServices = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], DepartmentsServices);
    return DepartmentsServices;
}());



/***/ }),

/***/ "./src/app/admin/settings/department/store/effects/index.ts":
/*!******************************************************************!*\
  !*** ./src/app/admin/settings/department/store/effects/index.ts ***!
  \******************************************************************/
/*! exports provided: DepartmentsEffect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DepartmentsEffect", function() { return DepartmentsEffect; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _actions_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../actions/index */ "./src/app/admin/settings/department/store/actions/index.ts");
/* harmony import */ var _services_department_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/department.service */ "./src/app/admin/settings/department/services/department.service.ts");







var DepartmentsEffect = /** @class */ (function () {
    function DepartmentsEffect(actions$, skillsServices) {
        var _this = this;
        this.actions$ = actions$;
        this.skillsServices = skillsServices;
        this.getDepartments$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_index__WEBPACK_IMPORTED_MODULE_5__["ActionTypes"].GET_DEPARTMENTS), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function () { return _this.skillsServices.getDepartments().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return new _actions_index__WEBPACK_IMPORTED_MODULE_5__["getDepartmentsSuccess"](res); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(new _actions_index__WEBPACK_IMPORTED_MODULE_5__["getDepartmentFail"](error)); })); }));
        this.createDepartment$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_index__WEBPACK_IMPORTED_MODULE_5__["ActionTypes"].CREATE_DEPARTMENT), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (data) { return _this.skillsServices.createDepartment(data.payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return new _actions_index__WEBPACK_IMPORTED_MODULE_5__["createDepartmentSuccess"](res); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(new _actions_index__WEBPACK_IMPORTED_MODULE_5__["createDepartmentFail"](error)); })); }));
        this.deleteDepartment$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_index__WEBPACK_IMPORTED_MODULE_5__["ActionTypes"].DELETE_DEPARTMENT), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (data) { return _this.skillsServices.deleteDepartment(data.payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function () { return new _actions_index__WEBPACK_IMPORTED_MODULE_5__["deleteDepartmentSuccess"](data.payload); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(new _actions_index__WEBPACK_IMPORTED_MODULE_5__["deleteDepartmentFail"](error)); })); }));
        this.editDepartment$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_index__WEBPACK_IMPORTED_MODULE_5__["ActionTypes"].EDIT_DEPARTMENT), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (data) { return _this.skillsServices.editDepartment(data.payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return new _actions_index__WEBPACK_IMPORTED_MODULE_5__["editDepartmentSuccess"](res); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(new _actions_index__WEBPACK_IMPORTED_MODULE_5__["deleteDepartmentFail"](error)); })); }));
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DepartmentsEffect.prototype, "getDepartments$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DepartmentsEffect.prototype, "createDepartment$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DepartmentsEffect.prototype, "deleteDepartment$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DepartmentsEffect.prototype, "editDepartment$", void 0);
    DepartmentsEffect = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"], _services_department_service__WEBPACK_IMPORTED_MODULE_6__["DepartmentsServices"]])
    ], DepartmentsEffect);
    return DepartmentsEffect;
}());



/***/ }),

/***/ "./src/app/admin/settings/department/store/reducers/index.ts":
/*!*******************************************************************!*\
  !*** ./src/app/admin/settings/department/store/reducers/index.ts ***!
  \*******************************************************************/
/*! exports provided: reducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ngrx_entity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/entity */ "./node_modules/@ngrx/entity/fesm5/entity.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions */ "./src/app/admin/settings/department/store/actions/index.ts");



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
        case _actions__WEBPACK_IMPORTED_MODULE_2__["ActionTypes"].GET_DEPARTMENTS: {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { loading: true, error: null });
        }
        case _actions__WEBPACK_IMPORTED_MODULE_2__["ActionTypes"].GET_DEPARTMENTS_SUCCESS: {
            return adapter.addAll(action.payload, tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { loading: false, error: null, loaded: true }));
        }
        case _actions__WEBPACK_IMPORTED_MODULE_2__["ActionTypes"].GET_DEPARTMENTS_FAIL: {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { loading: false, error: action.payload });
        }
        case _actions__WEBPACK_IMPORTED_MODULE_2__["ActionTypes"].DELETE_DEPARTMENT: {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { deletePending: true, deleteError: null });
        }
        case _actions__WEBPACK_IMPORTED_MODULE_2__["ActionTypes"].DELETE_DEPARTMENT_SUCCESS: {
            var newState = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { deletePending: false, deleteError: null });
            return adapter.removeOne(action.payload, newState);
        }
        case _actions__WEBPACK_IMPORTED_MODULE_2__["ActionTypes"].DELETE_DEPARTMENT_FAIL: {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { deletePending: false, deleteError: action.payload });
        }
        case _actions__WEBPACK_IMPORTED_MODULE_2__["ActionTypes"].CREATE_DEPARTMENT: {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { createPending: true, createErrors: [] });
        }
        case _actions__WEBPACK_IMPORTED_MODULE_2__["ActionTypes"].CREATE_DEPARTMENT_SUCCESS: {
            return adapter.addOne(action.payload, tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { createPending: false, createErrors: [] }));
        }
        case _actions__WEBPACK_IMPORTED_MODULE_2__["ActionTypes"].CREATE_DEPARTMENT_FAIL: {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { createPending: false, createErrors: action.payload });
        }
        case _actions__WEBPACK_IMPORTED_MODULE_2__["ActionTypes"].EDIT_DEPARTMENT: {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { editPending: true, editErrors: [] });
        }
        case _actions__WEBPACK_IMPORTED_MODULE_2__["ActionTypes"].EDIT_DEPARTMENT_SUCCESS: {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { editPending: false, editErrors: [], entities: tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state.entities, (_a = {}, _a[action.payload._id] = action.payload, _a)) });
        }
        case _actions__WEBPACK_IMPORTED_MODULE_2__["ActionTypes"].EDIT_DEPARTMENT_FAIL: {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { editPending: false, editErrors: action.payload });
        }
        // case ActionTypes.GET_DEPARTMENT: {
        //   return {
        //     ...state,
        //     loading: true,
        //     error: null,
        //   };
        // }
        // case ActionTypes.GET_DEPARTMENT_SUCCESS: {
        //   return {
        //     ...state,
        //     loading: false,
        //     DEPARTMENT: action.payload,
        //     error: null,
        //   }
        // }
        // case ActionTypes.GET_DEPARTMENT_FAIL: {
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


/***/ })

}]);
//# sourceMappingURL=department-department-module.js.map