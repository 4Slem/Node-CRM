(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/admin/settings/department/store/actions/index.ts":
/*!******************************************************************!*\
  !*** ./src/app/admin/settings/department/store/actions/index.ts ***!
  \******************************************************************/
/*! exports provided: ActionTypes, getDepartments, getDepartmentsSuccess, getDepartmentsFail, getDepartment, getDepartmentSuccess, getDepartmentFail, editDepartment, editDepartmentSuccess, editDepartmentFail, deleteDepartment, deleteDepartmentSuccess, deleteDepartmentFail, createDepartment, createDepartmentSuccess, createDepartmentFail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionTypes", function() { return ActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDepartments", function() { return getDepartments; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDepartmentsSuccess", function() { return getDepartmentsSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDepartmentsFail", function() { return getDepartmentsFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDepartment", function() { return getDepartment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDepartmentSuccess", function() { return getDepartmentSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDepartmentFail", function() { return getDepartmentFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "editDepartment", function() { return editDepartment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "editDepartmentSuccess", function() { return editDepartmentSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "editDepartmentFail", function() { return editDepartmentFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteDepartment", function() { return deleteDepartment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteDepartmentSuccess", function() { return deleteDepartmentSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteDepartmentFail", function() { return deleteDepartmentFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createDepartment", function() { return createDepartment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createDepartmentSuccess", function() { return createDepartmentSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createDepartmentFail", function() { return createDepartmentFail; });
var ActionTypes;
(function (ActionTypes) {
    ActionTypes["GET_DEPARTMENTS"] = "[Department Component] GET_DEPARTMENTS";
    ActionTypes["GET_DEPARTMENTS_SUCCESS"] = "[Department Component] GET_DEPARTMENTS_SUCCESS";
    ActionTypes["GET_DEPARTMENTS_FAIL"] = "[Department Component] GET_DEPARTMENTS_FAIL";
    ActionTypes["GET_DEPARTMENT"] = "[Department Component] GET_DEPARTMENT";
    ActionTypes["GET_DEPARTMENT_SUCCESS"] = "[Department Component] GET_DEPARTMENT_SUCCESS";
    ActionTypes["GET_DEPARTMENT_FAIL"] = "[Department Component] GET_DEPARTMENT_FAIL";
    ActionTypes["EDIT_DEPARTMENT"] = "[Department Component] EDIT_DEPARTMENT";
    ActionTypes["EDIT_DEPARTMENT_SUCCESS"] = "[Department Component] EDIT_DEPARTMENT_SUCCESS";
    ActionTypes["EDIT_DEPARTMENT_FAIL"] = "[Department Component] EDIT_DEPARTMENT_FAIL";
    ActionTypes["DELETE_DEPARTMENT"] = "[Department Component] DELETE_DEPARTMENT";
    ActionTypes["DELETE_DEPARTMENT_SUCCESS"] = "[Department Component] DELETE_DEPARTMENT_SUCCESS";
    ActionTypes["DELETE_DEPARTMENT_FAIL"] = "[Department Component] DELETE_DEPARTMENT_FAIL";
    ActionTypes["CREATE_DEPARTMENT"] = "[Department Component] CREATE_DEPARTMENT";
    ActionTypes["CREATE_DEPARTMENT_SUCCESS"] = "[Department Component] CREATE_DEPARTMENT_SUCCESS";
    ActionTypes["CREATE_DEPARTMENT_FAIL"] = "[Department Component] CREATE_DEPARTMENT_FAIL";
})(ActionTypes || (ActionTypes = {}));
var getDepartments = /** @class */ (function () {
    function getDepartments() {
        this.type = ActionTypes.GET_DEPARTMENTS;
    }
    return getDepartments;
}());

var getDepartmentsSuccess = /** @class */ (function () {
    function getDepartmentsSuccess(payload) {
        this.payload = payload;
        this.type = ActionTypes.GET_DEPARTMENTS_SUCCESS;
    }
    return getDepartmentsSuccess;
}());

var getDepartmentsFail = /** @class */ (function () {
    function getDepartmentsFail(payload) {
        this.payload = payload;
        this.type = ActionTypes.GET_DEPARTMENTS_FAIL;
    }
    return getDepartmentsFail;
}());

var getDepartment = /** @class */ (function () {
    function getDepartment(payload) {
        this.payload = payload;
        this.type = ActionTypes.GET_DEPARTMENT;
    }
    return getDepartment;
}());

var getDepartmentSuccess = /** @class */ (function () {
    function getDepartmentSuccess(payload) {
        this.payload = payload;
        this.type = ActionTypes.GET_DEPARTMENT_SUCCESS;
    }
    return getDepartmentSuccess;
}());

var getDepartmentFail = /** @class */ (function () {
    function getDepartmentFail(payload) {
        this.payload = payload;
        this.type = ActionTypes.GET_DEPARTMENT_FAIL;
    }
    return getDepartmentFail;
}());

var editDepartment = /** @class */ (function () {
    function editDepartment(payload) {
        this.payload = payload;
        this.type = ActionTypes.EDIT_DEPARTMENT;
    }
    return editDepartment;
}());

var editDepartmentSuccess = /** @class */ (function () {
    function editDepartmentSuccess(payload) {
        this.payload = payload;
        this.type = ActionTypes.EDIT_DEPARTMENT_SUCCESS;
    }
    return editDepartmentSuccess;
}());

var editDepartmentFail = /** @class */ (function () {
    function editDepartmentFail(payload) {
        this.payload = payload;
        this.type = ActionTypes.EDIT_DEPARTMENT_FAIL;
    }
    return editDepartmentFail;
}());

var deleteDepartment = /** @class */ (function () {
    function deleteDepartment(payload) {
        this.payload = payload;
        this.type = ActionTypes.DELETE_DEPARTMENT;
    }
    return deleteDepartment;
}());

var deleteDepartmentSuccess = /** @class */ (function () {
    function deleteDepartmentSuccess(payload) {
        this.payload = payload;
        this.type = ActionTypes.DELETE_DEPARTMENT_SUCCESS;
    }
    return deleteDepartmentSuccess;
}());

var deleteDepartmentFail = /** @class */ (function () {
    function deleteDepartmentFail(payload) {
        this.payload = payload;
        this.type = ActionTypes.DELETE_DEPARTMENT_FAIL;
    }
    return deleteDepartmentFail;
}());

var createDepartment = /** @class */ (function () {
    function createDepartment(payload) {
        this.payload = payload;
        this.type = ActionTypes.CREATE_DEPARTMENT;
    }
    return createDepartment;
}());

var createDepartmentSuccess = /** @class */ (function () {
    function createDepartmentSuccess(payload) {
        this.payload = payload;
        this.type = ActionTypes.CREATE_DEPARTMENT_SUCCESS;
    }
    return createDepartmentSuccess;
}());

var createDepartmentFail = /** @class */ (function () {
    function createDepartmentFail(payload) {
        this.payload = payload;
        this.type = ActionTypes.CREATE_DEPARTMENT_FAIL;
    }
    return createDepartmentFail;
}());



/***/ }),

/***/ "./src/app/admin/settings/department/store/selectors/index.ts":
/*!********************************************************************!*\
  !*** ./src/app/admin/settings/department/store/selectors/index.ts ***!
  \********************************************************************/
/*! exports provided: selectDepartmentsState, selectDepartments, selectLoading, selectError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectDepartmentsState", function() { return selectDepartmentsState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectDepartments", function() { return selectDepartments; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectLoading", function() { return selectLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectError", function() { return selectError; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");

var selectDepartmentsState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])('department');
var selectDepartments = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectDepartmentsState, function (state) {
    return Object.keys(state.entities).map(function (item) { return state.entities[item]; });
});
var selectLoading = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectDepartmentsState, function (state) {
    return state.loading;
});
var selectError = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectDepartmentsState, function (state) {
    return state.error;
});


/***/ }),

/***/ "./src/app/admin/settings/position/store/actions/index.ts":
/*!****************************************************************!*\
  !*** ./src/app/admin/settings/position/store/actions/index.ts ***!
  \****************************************************************/
/*! exports provided: ActionTypes, getPositions, getPositionsSuccess, getPositionsFail, getPosition, getPositionSuccess, getPositionFail, editPosition, editPositionSuccess, editPositionFail, deletePosition, deletePositionSuccess, deletePositionFail, createPosition, createPositionSuccess, createPositionFail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionTypes", function() { return ActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPositions", function() { return getPositions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPositionsSuccess", function() { return getPositionsSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPositionsFail", function() { return getPositionsFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPosition", function() { return getPosition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPositionSuccess", function() { return getPositionSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPositionFail", function() { return getPositionFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "editPosition", function() { return editPosition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "editPositionSuccess", function() { return editPositionSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "editPositionFail", function() { return editPositionFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deletePosition", function() { return deletePosition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deletePositionSuccess", function() { return deletePositionSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deletePositionFail", function() { return deletePositionFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPosition", function() { return createPosition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPositionSuccess", function() { return createPositionSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPositionFail", function() { return createPositionFail; });
var ActionTypes;
(function (ActionTypes) {
    ActionTypes["GET_POSITIONS"] = "[Position Component] GET_POSITIONS";
    ActionTypes["GET_POSITIONS_SUCCESS"] = "[Position Component] GET_POSITIONS_SUCCESS";
    ActionTypes["GET_POSITIONS_FAIL"] = "[Position Component] GET_POSITIONS_FAIL";
    ActionTypes["GET_POSITION"] = "[Position Component] GET_POSITION";
    ActionTypes["GET_POSITION_SUCCESS"] = "[Position Component] GET_POSITION_SUCCESS";
    ActionTypes["GET_POSITION_FAIL"] = "[Position Component] GET_POSITION_FAIL";
    ActionTypes["EDIT_POSITION"] = "[Position Component] EDIT_POSITION";
    ActionTypes["EDIT_POSITION_SUCCESS"] = "[Position Component] EDIT_POSITION_SUCCESS";
    ActionTypes["EDIT_POSITION_FAIL"] = "[Position Component] EDIT_POSITION_FAIL";
    ActionTypes["DELETE_POSITION"] = "[Position Component] DELETE_POSITION";
    ActionTypes["DELETE_POSITION_SUCCESS"] = "[Position Component] DELETE_POSITION_SUCCESS";
    ActionTypes["DELETE_POSITION_FAIL"] = "[Position Component] DELETE_POSITION_FAIL";
    ActionTypes["CREATE_POSITION"] = "[Position Component] CREATE_POSITION";
    ActionTypes["CREATE_POSITION_SUCCESS"] = "[Position Component] CREATE_POSITION_SUCCESS";
    ActionTypes["CREATE_POSITION_FAIL"] = "[Position Component] CREATE_POSITION_FAIL";
})(ActionTypes || (ActionTypes = {}));
var getPositions = /** @class */ (function () {
    function getPositions() {
        this.type = ActionTypes.GET_POSITIONS;
    }
    return getPositions;
}());

var getPositionsSuccess = /** @class */ (function () {
    function getPositionsSuccess(payload) {
        this.payload = payload;
        this.type = ActionTypes.GET_POSITIONS_SUCCESS;
    }
    return getPositionsSuccess;
}());

var getPositionsFail = /** @class */ (function () {
    function getPositionsFail(payload) {
        this.payload = payload;
        this.type = ActionTypes.GET_POSITIONS_FAIL;
    }
    return getPositionsFail;
}());

var getPosition = /** @class */ (function () {
    function getPosition(payload) {
        this.payload = payload;
        this.type = ActionTypes.GET_POSITION;
    }
    return getPosition;
}());

var getPositionSuccess = /** @class */ (function () {
    function getPositionSuccess(payload) {
        this.payload = payload;
        this.type = ActionTypes.GET_POSITION_SUCCESS;
    }
    return getPositionSuccess;
}());

var getPositionFail = /** @class */ (function () {
    function getPositionFail(payload) {
        this.payload = payload;
        this.type = ActionTypes.GET_POSITION_FAIL;
    }
    return getPositionFail;
}());

var editPosition = /** @class */ (function () {
    function editPosition(payload) {
        this.payload = payload;
        this.type = ActionTypes.EDIT_POSITION;
    }
    return editPosition;
}());

var editPositionSuccess = /** @class */ (function () {
    function editPositionSuccess(payload) {
        this.payload = payload;
        this.type = ActionTypes.EDIT_POSITION_SUCCESS;
    }
    return editPositionSuccess;
}());

var editPositionFail = /** @class */ (function () {
    function editPositionFail(payload) {
        this.payload = payload;
        this.type = ActionTypes.EDIT_POSITION_FAIL;
    }
    return editPositionFail;
}());

var deletePosition = /** @class */ (function () {
    function deletePosition(payload) {
        this.payload = payload;
        this.type = ActionTypes.DELETE_POSITION;
    }
    return deletePosition;
}());

var deletePositionSuccess = /** @class */ (function () {
    function deletePositionSuccess(payload) {
        this.payload = payload;
        this.type = ActionTypes.DELETE_POSITION_SUCCESS;
    }
    return deletePositionSuccess;
}());

var deletePositionFail = /** @class */ (function () {
    function deletePositionFail(payload) {
        this.payload = payload;
        this.type = ActionTypes.DELETE_POSITION_FAIL;
    }
    return deletePositionFail;
}());

var createPosition = /** @class */ (function () {
    function createPosition(payload) {
        this.payload = payload;
        this.type = ActionTypes.CREATE_POSITION;
    }
    return createPosition;
}());

var createPositionSuccess = /** @class */ (function () {
    function createPositionSuccess(payload) {
        this.payload = payload;
        this.type = ActionTypes.CREATE_POSITION_SUCCESS;
    }
    return createPositionSuccess;
}());

var createPositionFail = /** @class */ (function () {
    function createPositionFail(payload) {
        this.payload = payload;
        this.type = ActionTypes.CREATE_POSITION_FAIL;
    }
    return createPositionFail;
}());



/***/ }),

/***/ "./src/app/admin/settings/position/store/selectors/index.ts":
/*!******************************************************************!*\
  !*** ./src/app/admin/settings/position/store/selectors/index.ts ***!
  \******************************************************************/
/*! exports provided: selectPositionsState, selectPositions, selectLoading, selectError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectPositionsState", function() { return selectPositionsState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectPositions", function() { return selectPositions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectLoading", function() { return selectLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectError", function() { return selectError; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");

var selectPositionsState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])('positions');
var selectPositions = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectPositionsState, function (state) {
    return Object.keys(state.entities).map(function (item) { return state.entities[item]; });
});
var selectLoading = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectPositionsState, function (state) {
    return state.loading;
});
var selectError = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectPositionsState, function (state) {
    return state.error;
});


/***/ }),

/***/ "./src/app/admin/settings/skill/store/actions/index.ts":
/*!*************************************************************!*\
  !*** ./src/app/admin/settings/skill/store/actions/index.ts ***!
  \*************************************************************/
/*! exports provided: ActionTypes, getSkills, getSkillsSuccess, getSkillsFail, getSkill, getSkillSuccess, getSkillFail, editSkill, editSkillSuccess, editSkillFail, deleteSkill, deleteSkillSuccess, deleteSkillFail, createSkill, createSkillSuccess, createSkillFail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionTypes", function() { return ActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSkills", function() { return getSkills; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSkillsSuccess", function() { return getSkillsSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSkillsFail", function() { return getSkillsFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSkill", function() { return getSkill; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSkillSuccess", function() { return getSkillSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSkillFail", function() { return getSkillFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "editSkill", function() { return editSkill; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "editSkillSuccess", function() { return editSkillSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "editSkillFail", function() { return editSkillFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteSkill", function() { return deleteSkill; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteSkillSuccess", function() { return deleteSkillSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteSkillFail", function() { return deleteSkillFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSkill", function() { return createSkill; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSkillSuccess", function() { return createSkillSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSkillFail", function() { return createSkillFail; });
var ActionTypes;
(function (ActionTypes) {
    ActionTypes["GET_SKILLS"] = "[Skill Component] GET_SKILLS";
    ActionTypes["GET_SKILLS_SUCCESS"] = "[Skill Component] GET_SKILLS_SUCCESS";
    ActionTypes["GET_SKILLS_FAIL"] = "[Skill Component] GET_SKILLS_FAIL";
    ActionTypes["GET_SKILL"] = "[Skill Component] GET_SKILL";
    ActionTypes["GET_SKILL_SUCCESS"] = "[Skill Component] GET_SKILL_SUCCESS";
    ActionTypes["GET_SKILL_FAIL"] = "[Skill Component] GET_SKILL_FAIL";
    ActionTypes["EDIT_SKILL"] = "[Skill Component] EDIT_SKILL";
    ActionTypes["EDIT_SKILL_SUCCESS"] = "[Skill Component] EDIT_SKILL_SUCCESS";
    ActionTypes["EDIT_SKILL_FAIL"] = "[Skill Component] EDIT_SKILL_FAIL";
    ActionTypes["DELETE_SKILL"] = "[Skill Component] DELETE_SKILL";
    ActionTypes["DELETE_SKILL_SUCCESS"] = "[Skill Component] DELETE_SKILL_SUCCESS";
    ActionTypes["DELETE_SKILL_FAIL"] = "[Skill Component] DELETE_SKILL_FAIL";
    ActionTypes["CREATE_SKILL"] = "[Skill Component] CREATE_SKILL";
    ActionTypes["CREATE_SKILL_SUCCESS"] = "[Skill Component] CREATE_SKILL_SUCCESS";
    ActionTypes["CREATE_SKILL_FAIL"] = "[Skill Component] CREATE_SKILL_FAIL";
})(ActionTypes || (ActionTypes = {}));
var getSkills = /** @class */ (function () {
    function getSkills() {
        this.type = ActionTypes.GET_SKILLS;
    }
    return getSkills;
}());

var getSkillsSuccess = /** @class */ (function () {
    function getSkillsSuccess(payload) {
        this.payload = payload;
        this.type = ActionTypes.GET_SKILLS_SUCCESS;
    }
    return getSkillsSuccess;
}());

var getSkillsFail = /** @class */ (function () {
    function getSkillsFail(payload) {
        this.payload = payload;
        this.type = ActionTypes.GET_SKILLS_FAIL;
    }
    return getSkillsFail;
}());

var getSkill = /** @class */ (function () {
    function getSkill(payload) {
        this.payload = payload;
        this.type = ActionTypes.GET_SKILL;
    }
    return getSkill;
}());

var getSkillSuccess = /** @class */ (function () {
    function getSkillSuccess(payload) {
        this.payload = payload;
        this.type = ActionTypes.GET_SKILL_SUCCESS;
    }
    return getSkillSuccess;
}());

var getSkillFail = /** @class */ (function () {
    function getSkillFail(payload) {
        this.payload = payload;
        this.type = ActionTypes.GET_SKILL_FAIL;
    }
    return getSkillFail;
}());

var editSkill = /** @class */ (function () {
    function editSkill(payload) {
        this.payload = payload;
        this.type = ActionTypes.EDIT_SKILL;
    }
    return editSkill;
}());

var editSkillSuccess = /** @class */ (function () {
    function editSkillSuccess(payload) {
        this.payload = payload;
        this.type = ActionTypes.EDIT_SKILL_SUCCESS;
    }
    return editSkillSuccess;
}());

var editSkillFail = /** @class */ (function () {
    function editSkillFail(payload) {
        this.payload = payload;
        this.type = ActionTypes.EDIT_SKILL_FAIL;
    }
    return editSkillFail;
}());

var deleteSkill = /** @class */ (function () {
    function deleteSkill(payload) {
        this.payload = payload;
        this.type = ActionTypes.DELETE_SKILL;
    }
    return deleteSkill;
}());

var deleteSkillSuccess = /** @class */ (function () {
    function deleteSkillSuccess(payload) {
        this.payload = payload;
        this.type = ActionTypes.DELETE_SKILL_SUCCESS;
    }
    return deleteSkillSuccess;
}());

var deleteSkillFail = /** @class */ (function () {
    function deleteSkillFail(payload) {
        this.payload = payload;
        this.type = ActionTypes.DELETE_SKILL_FAIL;
    }
    return deleteSkillFail;
}());

var createSkill = /** @class */ (function () {
    function createSkill(payload) {
        this.payload = payload;
        this.type = ActionTypes.CREATE_SKILL;
    }
    return createSkill;
}());

var createSkillSuccess = /** @class */ (function () {
    function createSkillSuccess(payload) {
        this.payload = payload;
        this.type = ActionTypes.CREATE_SKILL_SUCCESS;
    }
    return createSkillSuccess;
}());

var createSkillFail = /** @class */ (function () {
    function createSkillFail(payload) {
        this.payload = payload;
        this.type = ActionTypes.CREATE_SKILL_FAIL;
    }
    return createSkillFail;
}());



/***/ }),

/***/ "./src/app/admin/settings/skill/store/selectors/index.ts":
/*!***************************************************************!*\
  !*** ./src/app/admin/settings/skill/store/selectors/index.ts ***!
  \***************************************************************/
/*! exports provided: selectSkillsState, selectSkills, selectLoading, selectError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectSkillsState", function() { return selectSkillsState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectSkills", function() { return selectSkills; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectLoading", function() { return selectLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectError", function() { return selectError; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");

var selectSkillsState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])('skills');
var selectSkills = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectSkillsState, function (state) {
    return Object.keys(state.entities).map(function (item) { return state.entities[item]; });
});
var selectLoading = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectSkillsState, function (state) {
    return state.loading;
});
var selectError = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectSkillsState, function (state) {
    return state.error;
});


/***/ })

}]);
//# sourceMappingURL=common.js.map