import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

import {
  ActionTypes,
  createDepartment, createDepartmentFail,
  createDepartmentSuccess, deleteDepartment, deleteDepartmentFail, deleteDepartmentSuccess, editDepartment, editDepartmentSuccess,
  getDepartmentFail,
  getDepartmentsSuccess
} from '../actions/index';
import { DepartmentsServices } from '../../services/department.service';


@Injectable({
  providedIn: 'root',
})

export class DepartmentsEffect {
  constructor(private actions$: Actions, private skillsServices: DepartmentsServices) {}

  @Effect()
  getDepartments$ = this.actions$.pipe(
    ofType(ActionTypes.GET_DEPARTMENTS),
    switchMap(() => this.skillsServices.getDepartments().pipe(
      map(res => new getDepartmentsSuccess(res)),
      catchError(error => of(new getDepartmentFail(error)))
    ))
  );

  @Effect()
  createDepartment$ = this.actions$.pipe(
    ofType(ActionTypes.CREATE_DEPARTMENT),
    switchMap((data: createDepartment) => this.skillsServices.createDepartment(data.payload).pipe(
      map(res => new createDepartmentSuccess(res)),
      catchError(error => of(new createDepartmentFail(error)))
    ))
  );

  @Effect()
  deleteDepartment$ = this.actions$.pipe(
    ofType(ActionTypes.DELETE_DEPARTMENT),
    switchMap((data: deleteDepartment) => this.skillsServices.deleteDepartment(data.payload).pipe(
      map(() => new deleteDepartmentSuccess(data.payload)),
      catchError(error => of(new deleteDepartmentFail(error)))
    ))
  );

  @Effect()
  editDepartment$ = this.actions$.pipe(
    ofType(ActionTypes.EDIT_DEPARTMENT),
    switchMap((data: editDepartment) => this.skillsServices.editDepartment(data.payload).pipe(
      map((res) => new editDepartmentSuccess(res)),
      catchError(error => of(new deleteDepartmentFail(error)))
    ))
  );
}