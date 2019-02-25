(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["position-position-module"],{

/***/ "./src/app/admin/settings/position/position-routing.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/admin/settings/position/position-routing.module.ts ***!
  \********************************************************************/
/*! exports provided: PositionRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PositionRoutingModule", function() { return PositionRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _position_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./position.component */ "./src/app/admin/settings/position/position.component.ts");




var routes = [
    { path: '', component: _position_component__WEBPACK_IMPORTED_MODULE_3__["PositionComponent"], pathMatch: 'full' }
];
var PositionRoutingModule = /** @class */ (function () {
    function PositionRoutingModule() {
    }
    PositionRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], PositionRoutingModule);
    return PositionRoutingModule;
}());



/***/ }),

/***/ "./src/app/admin/settings/position/position.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/admin/settings/position/position.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"contacts-list col-xs-12 col-sm-8 col-lg-9\">\n    <a href=\"#\" class=\"btn btn-primary rounded \" data-toggle=\"modal\" data-target=\"#add_skill\"><i class=\"fa fa-plus\"></i> Add Position</a>\n\n    <ul class=\"contact-list\" *ngIf=\"positions$ | async as data\">\n        <li *ngFor=\"let item of data\">\n            <div class=\"contact-cont\">\n                <div class=\"contact-info\">\n                    <span class=\"contact-name text-ellipsis\">{{ item.name }}</span>\n                </div>\n                <ul class=\"contact-action\">\n                    <li class=\"dropdown\">\n                        <a href=\"./contacts.html\" class=\"dropdown-toggle action-icon\" data-toggle=\"dropdown\" aria-expanded=\"false\"><i class=\"fa fa-ellipsis-v\"></i></a>\n                        <ul class=\"dropdown-menu\">\n                            <li><a  data-toggle=\"modal\" data-target=\"#edit_skill\" (click)=\"setItem(item)\">Edit</a></li>\n                            <li><a  data-toggle=\"modal\" data-target=\"#delete_skill\" (click)=\"setItem(item)\">Delete</a></li>\n                        </ul>\n                    </li>\n                </ul>\n            </div>\n        </li>\n    </ul>\n</div>\n\n<div id=\"add_skill\" class=\"modal custom-modal fade\" role=\"dialog\">\n    <div class=\"modal-dialog\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n        <div class=\"modal-content modal-lg\">\n            <div class=\"modal-header\">\n                <h4 class=\"modal-title\">Add Position</h4>\n            </div>\n            <div class=\"modal-body\">\n                <div class=\"m-b-30\">\n                    <div class=\"row\">\n                        <div class=\"col-sm-12\">\n                            <div class=\"form-group\">\n                                <label class=\"control-label\">Name <span class=\"text-danger\">*</span></label>\n                                <input class=\"form-control\" #create type=\"text\">\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"m-t-20 text-center\">\n                        <button class=\"btn btn-primary btn-lg\" data-dismiss=\"modal\" (click)=\"createConfirm()\">Create Position</button>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<div id=\"edit_skill\" class=\"modal custom-modal fade\" role=\"dialog\">\n    <div class=\"modal-dialog\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n        <div class=\"modal-content modal-lg\">\n            <div class=\"modal-header\">\n                <h4 class=\"modal-title\">Edit Position</h4>\n            </div>\n            <div class=\"modal-body\">\n                <div class=\"m-b-30\">\n                    <div class=\"row\">\n                        <div class=\"col-sm-12\">\n                            <div class=\"form-group\">\n                                <label class=\"control-label\">Name <span class=\"text-danger\">*</span></label>\n                                <input class=\"form-control\" [value]=\"item.name\" #edit type=\"text\">\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"m-t-20 text-center\">\n                        <button class=\"btn btn-primary btn-lg\" data-dismiss=\"modal\" (click)=\"editConfirm(item)\">Update Position</button>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<div id=\"delete_skill\" class=\"modal custom-modal fade\" role=\"dialog\">\n    <div class=\"modal-dialog\">\n        <div class=\"modal-content modal-md\">\n            <div class=\"modal-header\">\n                <h4 class=\"modal-title\">Delete Position</h4>\n            </div>\n            <form>\n                <div class=\"modal-body card-box\">\n                    <p>Are you sure want to delete this?</p>\n                    <div class=\"m-t-20\"> <a class=\"btn btn-default\" data-dismiss=\"modal\">Close</a>\n                        <button data-dismiss=\"modal\"  class=\"btn btn-danger\" (click)=\"delete(item)\">Delete</button>\n                    </div>\n                </div>\n            </form>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/admin/settings/position/position.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/admin/settings/position/position.component.ts ***!
  \***************************************************************/
/*! exports provided: PositionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PositionComponent", function() { return PositionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./store/actions */ "./src/app/admin/settings/position/store/actions/index.ts");
/* harmony import */ var _store_selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./store/selectors */ "./src/app/admin/settings/position/store/selectors/index.ts");





var PositionComponent = /** @class */ (function () {
    function PositionComponent(store) {
        this.store = store;
        this.item = { name: '' };
    }
    PositionComponent.prototype.ngOnInit = function () {
        this.positions$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_store_selectors__WEBPACK_IMPORTED_MODULE_4__["selectPositions"]));
        this.loading$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_store_selectors__WEBPACK_IMPORTED_MODULE_4__["selectLoading"]));
        this.error$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_store_selectors__WEBPACK_IMPORTED_MODULE_4__["selectError"]));
        this.store.dispatch(new _store_actions__WEBPACK_IMPORTED_MODULE_3__["getPositions"]());
    };
    PositionComponent.prototype.setItem = function (data) {
        this.item = data;
    };
    PositionComponent.prototype.createConfirm = function () {
        var data = this.create.nativeElement.value;
        if (data && data.length > 1) {
            this.store.dispatch(new _store_actions__WEBPACK_IMPORTED_MODULE_3__["createPosition"]({ name: data }));
        }
        this.create.nativeElement.value = '';
    };
    PositionComponent.prototype.editConfirm = function (data) {
        var name = this.edit.nativeElement.value;
        if (name && name.length > 1) {
            var newState = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, data, { name: name });
            this.store.dispatch(new _store_actions__WEBPACK_IMPORTED_MODULE_3__["editPosition"]({ data: newState, id: data._id }));
        }
        this.edit.nativeElement.value = this.item.name;
    };
    PositionComponent.prototype.delete = function (data) {
        this.store.dispatch(new _store_actions__WEBPACK_IMPORTED_MODULE_3__["deletePosition"](data._id));
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('create'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], PositionComponent.prototype, "create", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('edit'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], PositionComponent.prototype, "edit", void 0);
    PositionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-position',
            template: __webpack_require__(/*! ./position.component.html */ "./src/app/admin/settings/position/position.component.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
    ], PositionComponent);
    return PositionComponent;
}());



/***/ }),

/***/ "./src/app/admin/settings/position/position.module.ts":
/*!************************************************************!*\
  !*** ./src/app/admin/settings/position/position.module.ts ***!
  \************************************************************/
/*! exports provided: PositionModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PositionModule", function() { return PositionModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _store_reducers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./store/reducers */ "./src/app/admin/settings/position/store/reducers/index.ts");
/* harmony import */ var _store_effects__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./store/effects */ "./src/app/admin/settings/position/store/effects/index.ts");
/* harmony import */ var _position_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./position-routing.module */ "./src/app/admin/settings/position/position-routing.module.ts");
/* harmony import */ var _position_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./position.component */ "./src/app/admin/settings/position/position.component.ts");









var PositionModule = /** @class */ (function () {
    function PositionModule() {
    }
    PositionModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _position_component__WEBPACK_IMPORTED_MODULE_8__["PositionComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _position_routing_module__WEBPACK_IMPORTED_MODULE_7__["PositionRoutingModule"],
                _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["StoreModule"].forFeature('positions', _store_reducers__WEBPACK_IMPORTED_MODULE_5__["reducer"]),
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["EffectsModule"].forFeature([_store_effects__WEBPACK_IMPORTED_MODULE_6__["PositionsEffect"]]),
            ],
            exports: [_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["StoreModule"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["EffectsModule"]]
        })
    ], PositionModule);
    return PositionModule;
}());



/***/ }),

/***/ "./src/app/admin/settings/position/services/position.services.ts":
/*!***********************************************************************!*\
  !*** ./src/app/admin/settings/position/services/position.services.ts ***!
  \***********************************************************************/
/*! exports provided: PositionServices */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PositionServices", function() { return PositionServices; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var PositionServices = /** @class */ (function () {
    function PositionServices(http) {
        this.http = http;
    }
    PositionServices.prototype.getPositions = function () {
        return this.http.get('http://localhost:3000/api/position');
    };
    PositionServices.prototype.deletePosition = function (data) {
        return this.http.delete("http://localhost:3000/api/position/" + data);
    };
    PositionServices.prototype.createPosition = function (data) {
        return this.http.post("https://crm-mean.herokuapp.com/api/position", data);
    };
    PositionServices.prototype.editPosition = function (_a) {
        var data = _a.data, id = _a.id;
        return this.http.patch("http://localhost:3000/api/position/" + id, data);
    };
    PositionServices = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], PositionServices);
    return PositionServices;
}());



/***/ }),

/***/ "./src/app/admin/settings/position/store/effects/index.ts":
/*!****************************************************************!*\
  !*** ./src/app/admin/settings/position/store/effects/index.ts ***!
  \****************************************************************/
/*! exports provided: PositionsEffect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PositionsEffect", function() { return PositionsEffect; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _actions_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../actions/index */ "./src/app/admin/settings/position/store/actions/index.ts");
/* harmony import */ var _services_position_services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/position.services */ "./src/app/admin/settings/position/services/position.services.ts");







var PositionsEffect = /** @class */ (function () {
    function PositionsEffect(actions$, positionsService) {
        var _this = this;
        this.actions$ = actions$;
        this.positionsService = positionsService;
        this.getPositions$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_index__WEBPACK_IMPORTED_MODULE_5__["ActionTypes"].GET_POSITIONS), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function () { return _this.positionsService.getPositions().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return new _actions_index__WEBPACK_IMPORTED_MODULE_5__["getPositionsSuccess"](res); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(new _actions_index__WEBPACK_IMPORTED_MODULE_5__["getPositionFail"](error)); })); }));
        this.createPosition$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_index__WEBPACK_IMPORTED_MODULE_5__["ActionTypes"].CREATE_POSITION), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (data) { return _this.positionsService.createPosition(data.payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return new _actions_index__WEBPACK_IMPORTED_MODULE_5__["createPositionSuccess"](res); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(new _actions_index__WEBPACK_IMPORTED_MODULE_5__["createPositionFail"](error)); })); }));
        this.deletePosition$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_index__WEBPACK_IMPORTED_MODULE_5__["ActionTypes"].DELETE_POSITION), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (data) { return _this.positionsService.deletePosition(data.payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function () { return new _actions_index__WEBPACK_IMPORTED_MODULE_5__["deletePositionSuccess"](data.payload); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(new _actions_index__WEBPACK_IMPORTED_MODULE_5__["deletePositionFail"](error)); })); }));
        this.editPosition$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_index__WEBPACK_IMPORTED_MODULE_5__["ActionTypes"].EDIT_POSITION), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (data) { return _this.positionsService.editPosition(data.payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return new _actions_index__WEBPACK_IMPORTED_MODULE_5__["editPositionSuccess"](res); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(new _actions_index__WEBPACK_IMPORTED_MODULE_5__["deletePositionFail"](error)); })); }));
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PositionsEffect.prototype, "getPositions$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PositionsEffect.prototype, "createPosition$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PositionsEffect.prototype, "deletePosition$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PositionsEffect.prototype, "editPosition$", void 0);
    PositionsEffect = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"], _services_position_services__WEBPACK_IMPORTED_MODULE_6__["PositionServices"]])
    ], PositionsEffect);
    return PositionsEffect;
}());



/***/ }),

/***/ "./src/app/admin/settings/position/store/reducers/index.ts":
/*!*****************************************************************!*\
  !*** ./src/app/admin/settings/position/store/reducers/index.ts ***!
  \*****************************************************************/
/*! exports provided: reducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ngrx_entity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/entity */ "./node_modules/@ngrx/entity/fesm5/entity.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions */ "./src/app/admin/settings/position/store/actions/index.ts");



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
        case _actions__WEBPACK_IMPORTED_MODULE_2__["ActionTypes"].GET_POSITIONS: {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { loading: true, error: null });
        }
        case _actions__WEBPACK_IMPORTED_MODULE_2__["ActionTypes"].GET_POSITIONS_SUCCESS: {
            return adapter.addAll(action.payload, tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { loading: false, error: null, loaded: true }));
            // return {
            //   ...state,
            // }
        }
        case _actions__WEBPACK_IMPORTED_MODULE_2__["ActionTypes"].GET_POSITIONS_FAIL: {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { loading: false, error: action.payload });
        }
        case _actions__WEBPACK_IMPORTED_MODULE_2__["ActionTypes"].DELETE_POSITION: {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { deletePending: true, deleteError: null });
        }
        case _actions__WEBPACK_IMPORTED_MODULE_2__["ActionTypes"].DELETE_POSITION_SUCCESS: {
            var newState = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { deletePending: false, deleteError: null });
            return adapter.removeOne(action.payload, newState);
        }
        case _actions__WEBPACK_IMPORTED_MODULE_2__["ActionTypes"].DELETE_POSITION_FAIL: {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { deletePending: false, deleteError: action.payload });
        }
        case _actions__WEBPACK_IMPORTED_MODULE_2__["ActionTypes"].CREATE_POSITION: {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { createPending: true, createErrors: [] });
        }
        case _actions__WEBPACK_IMPORTED_MODULE_2__["ActionTypes"].CREATE_POSITION_SUCCESS: {
            return adapter.addOne(action.payload, tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { createPending: false, createErrors: [] }));
        }
        case _actions__WEBPACK_IMPORTED_MODULE_2__["ActionTypes"].CREATE_POSITION_FAIL: {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { createPending: false, createErrors: action.payload });
        }
        case _actions__WEBPACK_IMPORTED_MODULE_2__["ActionTypes"].EDIT_POSITION: {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { editPending: true, editErrors: [] });
        }
        case _actions__WEBPACK_IMPORTED_MODULE_2__["ActionTypes"].EDIT_POSITION_SUCCESS: {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { editPending: false, editErrors: [], entities: tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state.entities, (_a = {}, _a[action.payload._id] = action.payload, _a)) });
        }
        case _actions__WEBPACK_IMPORTED_MODULE_2__["ActionTypes"].EDIT_POSITION_FAIL: {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { editPending: false, editErrors: action.payload });
        }
        // case ActionTypes.GET_POSITION: {
        //   return {
        //     ...state,
        //     loading: true,
        //     error: null,
        //   };
        // }
        // case ActionTypes.GET_POSITION_SUCCESS: {
        //   return {
        //     ...state,
        //     loading: false,
        //     position: action.payload,
        //     error: null,
        //   }
        // }
        // case ActionTypes.GET_POSITION_FAIL: {
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
//# sourceMappingURL=position-position-module.js.map