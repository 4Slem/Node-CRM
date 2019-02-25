import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

import {
  ActionTypes,
  createEmployee, createEmployeeFail,
  createEmployeeSuccess, deleteEmployee, deleteEmployeeFail, deleteEmployeeSuccess, editEmployee, editEmployeeSuccess,
  getEmployeeFail,
  getAllEmployeeSuccess, getAllEmployee
} from '../actions';
import { EmployeeService } from '../../services/employee.service';


@Injectable({
  providedIn: 'root',
})

export class AllEmployeeEffect {
  constructor(private actions$: Actions, private skillsService: EmployeeService) {}

  @Effect()
  getAllEmployee$ = this.actions$.pipe(
    ofType(ActionTypes.GET_ALL_EMPLOYEE),
    switchMap((data: getAllEmployee) => this.skillsService.getAllEmployee(data.payload).pipe(
      map(res => new getAllEmployeeSuccess(res)),
      catchError(error => of(new getEmployeeFail(error)))
    ))
  );

  @Effect()
  createEmployee$ = this.actions$.pipe(
    ofType(ActionTypes.CREATE_EMPLOYEE),
    switchMap((data: createEmployee) => this.skillsService.createEmployee(data.payload).pipe(
      map(res => new createEmployeeSuccess(res)),
      catchError(error => of(new createEmployeeFail(error)))
    ))
  );

  @Effect()
  deleteEmployee$ = this.actions$.pipe(
    ofType(ActionTypes.DELETE_EMPLOYEE),
    switchMap((data: deleteEmployee) => this.skillsService.deleteEmployee(data.payload).pipe(
      map(() => new deleteEmployeeSuccess(data.payload)),
      catchError(error => of(new deleteEmployeeFail(error)))
    ))
  );

  @Effect()
  editEmployee$ = this.actions$.pipe(
    ofType(ActionTypes.EDIT_EMPLOYEE),
    switchMap((data: editEmployee) => this.skillsService.editEmployee(data.payload).pipe(
      map((res) => new editEmployeeSuccess(res)),
      catchError(error => of(new deleteEmployeeFail(error)))
    ))
  );
}