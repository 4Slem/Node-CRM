import { Action } from '@ngrx/store';
import { Employee } from '../../models/employee';

export enum ActionTypes {
  GET_ALL_EMPLOYEE = '[Employee Component] GET_ALL_EMPLOYEE',
  GET_ALL_EMPLOYEE_SUCCESS = '[Employee Component] GET_ALL_EMPLOYEE_SUCCESS',
  GET_ALL_EMPLOYEE_FAIL = '[Employee Component] GET_ALL_EMPLOYEE_FAIL',

  GET_EMPLOYEE = '[Employee Component] GET_EMPLOYEE',
  GET_EMPLOYEE_SUCCESS = '[Employee Component] GET_EMPLOYEE_SUCCESS',
  GET_EMPLOYEE_FAIL = '[Employee Component] GET_EMPLOYEE_FAIL',

  EDIT_EMPLOYEE = '[Employee Component] EDIT_EMPLOYEE',
  EDIT_EMPLOYEE_SUCCESS = '[Employee Component] EDIT_EMPLOYEE_SUCCESS',
  EDIT_EMPLOYEE_FAIL = '[Employee Component] EDIT_EMPLOYEE_FAIL',

  DELETE_EMPLOYEE = '[Employee Component] DELETE_EMPLOYEE',
  DELETE_EMPLOYEE_SUCCESS = '[Employee Component] DELETE_EMPLOYEE_SUCCESS',
  DELETE_EMPLOYEE_FAIL = '[Employee Component] DELETE_EMPLOYEE_FAIL',

  CREATE_EMPLOYEE = '[Employee Component] CREATE_EMPLOYEE',
  CREATE_EMPLOYEE_SUCCESS = '[Employee Component] CREATE_EMPLOYEE_SUCCESS',
  CREATE_EMPLOYEE_FAIL = '[Employee Component] CREATE_EMPLOYEE_FAIL',
}

export class getAllEmployee implements Action {
  readonly type = ActionTypes.GET_ALL_EMPLOYEE;

  constructor(public payload: any) {}
}

export class getAllEmployeeSuccess implements Action {
  readonly type = ActionTypes.GET_ALL_EMPLOYEE_SUCCESS;

  constructor(public payload: Employee[]) {}
}

export class getAllEmployeeFail implements Action {
  readonly type = ActionTypes.GET_ALL_EMPLOYEE_FAIL;

  constructor(public payload: string) {}
}


export class getEmployee implements Action {
  readonly type = ActionTypes.GET_EMPLOYEE;

  constructor(public payload: number) {}
}

export class getEmployeeSuccess implements Action {
  readonly type = ActionTypes.GET_EMPLOYEE_SUCCESS;

  constructor(public payload: Employee) {}
}

export class getEmployeeFail implements Action {
  readonly type = ActionTypes.GET_EMPLOYEE_FAIL;

  constructor(public payload: string) {}
}


export class editEmployee implements Action {
  readonly type = ActionTypes.EDIT_EMPLOYEE;

  constructor(public payload: {data: Employee, id: number | string}) {}
}

export class editEmployeeSuccess implements Action {
  readonly type = ActionTypes.EDIT_EMPLOYEE_SUCCESS;

  constructor(public payload: Employee) {}
}

export class editEmployeeFail implements Action {
  readonly type = ActionTypes.EDIT_EMPLOYEE_FAIL;

  constructor(public payload: any[]) {}
}


export class deleteEmployee implements Action {
  readonly type = ActionTypes.DELETE_EMPLOYEE;

  constructor(public payload: string) {}
}

export class deleteEmployeeSuccess implements Action {
  readonly type = ActionTypes.DELETE_EMPLOYEE_SUCCESS;

  constructor(public payload: number | string) {}
}

export class deleteEmployeeFail implements Action {
  readonly type = ActionTypes.DELETE_EMPLOYEE_FAIL;

  constructor(public payload: string) {}
}


export class createEmployee implements Action {
  readonly type = ActionTypes.CREATE_EMPLOYEE;

  constructor(public payload: Employee) {}
}

export class createEmployeeSuccess implements Action {
  readonly type = ActionTypes.CREATE_EMPLOYEE_SUCCESS;

  constructor(public payload: Employee) {}
}

export class createEmployeeFail implements Action {
  readonly type = ActionTypes.CREATE_EMPLOYEE_FAIL;

  constructor(public payload: any[]) {}
}


export type EmployeeAction = getAllEmployee | getAllEmployeeSuccess |
  getAllEmployeeFail | getEmployee | getEmployeeSuccess | getEmployeeFail |
  editEmployee | editEmployeeSuccess | editEmployeeFail | deleteEmployee |
  deleteEmployeeSuccess | deleteEmployeeFail | createEmployee |
  createEmployeeSuccess | createEmployeeFail;