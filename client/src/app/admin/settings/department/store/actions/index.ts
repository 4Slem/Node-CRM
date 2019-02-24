import { Action } from '@ngrx/store';
import { Department } from '../../models/department';

export enum ActionTypes {
  GET_DEPARTMENTS = '[Department Component] GET_DEPARTMENTS',
  GET_DEPARTMENTS_SUCCESS = '[Department Component] GET_DEPARTMENTS_SUCCESS',
  GET_DEPARTMENTS_FAIL = '[Department Component] GET_DEPARTMENTS_FAIL',

  GET_DEPARTMENT = '[Department Component] GET_DEPARTMENT',
  GET_DEPARTMENT_SUCCESS = '[Department Component] GET_DEPARTMENT_SUCCESS',
  GET_DEPARTMENT_FAIL = '[Department Component] GET_DEPARTMENT_FAIL',

  EDIT_DEPARTMENT = '[Department Component] EDIT_DEPARTMENT',
  EDIT_DEPARTMENT_SUCCESS = '[Department Component] EDIT_DEPARTMENT_SUCCESS',
  EDIT_DEPARTMENT_FAIL = '[Department Component] EDIT_DEPARTMENT_FAIL',

  DELETE_DEPARTMENT = '[Department Component] DELETE_DEPARTMENT',
  DELETE_DEPARTMENT_SUCCESS = '[Department Component] DELETE_DEPARTMENT_SUCCESS',
  DELETE_DEPARTMENT_FAIL = '[Department Component] DELETE_DEPARTMENT_FAIL',

  CREATE_DEPARTMENT = '[Department Component] CREATE_DEPARTMENT',
  CREATE_DEPARTMENT_SUCCESS = '[Department Component] CREATE_DEPARTMENT_SUCCESS',
  CREATE_DEPARTMENT_FAIL = '[Department Component] CREATE_DEPARTMENT_FAIL',
}

export class getDepartments implements Action {
  readonly type = ActionTypes.GET_DEPARTMENTS;
}

export class getDepartmentsSuccess implements Action {
  readonly type = ActionTypes.GET_DEPARTMENTS_SUCCESS;

  constructor(public payload: Department[]) {}
}

export class getDepartmentsFail implements Action {
  readonly type = ActionTypes.GET_DEPARTMENTS_FAIL;

  constructor(public payload: string) {}
}


export class getDepartment implements Action {
  readonly type = ActionTypes.GET_DEPARTMENT;

  constructor(public payload: number) {}
}

export class getDepartmentSuccess implements Action {
  readonly type = ActionTypes.GET_DEPARTMENT_SUCCESS;

  constructor(public payload: Department) {}
}

export class getDepartmentFail implements Action {
  readonly type = ActionTypes.GET_DEPARTMENT_FAIL;

  constructor(public payload: string) {}
}


export class editDepartment implements Action {
  readonly type = ActionTypes.EDIT_DEPARTMENT;

  constructor(public payload: {data: Department, id: number | string}) {}
}

export class editDepartmentSuccess implements Action {
  readonly type = ActionTypes.EDIT_DEPARTMENT_SUCCESS;

  constructor(public payload: Department) {}
}

export class editDepartmentFail implements Action {
  readonly type = ActionTypes.EDIT_DEPARTMENT_FAIL;

  constructor(public payload: any[]) {}
}


export class deleteDepartment implements Action {
  readonly type = ActionTypes.DELETE_DEPARTMENT;

  constructor(public payload: string) {}
}

export class deleteDepartmentSuccess implements Action {
  readonly type = ActionTypes.DELETE_DEPARTMENT_SUCCESS;

  constructor(public payload: number | string) {}
}

export class deleteDepartmentFail implements Action {
  readonly type = ActionTypes.DELETE_DEPARTMENT_FAIL;

  constructor(public payload: string) {}
}


export class createDepartment implements Action {
  readonly type = ActionTypes.CREATE_DEPARTMENT;

  constructor(public payload: Department) {}
}

export class createDepartmentSuccess implements Action {
  readonly type = ActionTypes.CREATE_DEPARTMENT_SUCCESS;

  constructor(public payload: Department) {}
}

export class createDepartmentFail implements Action {
  readonly type = ActionTypes.CREATE_DEPARTMENT_FAIL;

  constructor(public payload: any[]) {}
}


export type DepartmentAction = getDepartments | getDepartmentsSuccess |
  getDepartmentsFail | getDepartment | getDepartmentSuccess | getDepartmentFail |
  editDepartment | editDepartmentSuccess | editDepartmentFail | deleteDepartment |
  deleteDepartmentSuccess | deleteDepartmentFail | createDepartment |
  createDepartmentSuccess | createDepartmentFail;