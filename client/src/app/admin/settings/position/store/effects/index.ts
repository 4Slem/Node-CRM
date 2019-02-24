import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators'
import { of } from 'rxjs';

import {
  ActionTypes,
  createPosition, createPositionFail,
  createPositionSuccess, deletePosition, deletePositionFail, deletePositionSuccess, editPosition, editPositionSuccess,
  getPositionFail,
  getPositionsSuccess
} from '../actions/index';
import { PositionServices } from '../../services/position.services';


@Injectable({
  providedIn: 'root',
})
export class PositionsEffect {
  constructor(private actions$: Actions, private positionsService: PositionServices) {}

  @Effect()
  getPositions$ = this.actions$.pipe(
    ofType(ActionTypes.GET_POSITIONS),
    switchMap(() => this.positionsService.getPositions().pipe(
      map(res => new getPositionsSuccess(res)),
      catchError(error => of(new getPositionFail(error)))
    ))
  );

  @Effect()
  createPosition$ = this.actions$.pipe(
    ofType(ActionTypes.CREATE_POSITION),
    switchMap((data: createPosition) => this.positionsService.createPosition(data.payload).pipe(
      map(res => new createPositionSuccess(res)),
      catchError(error => of(new createPositionFail(error)))
    ))
  );

  @Effect()
  deletePosition$ = this.actions$.pipe(
    ofType(ActionTypes.DELETE_POSITION),
    switchMap((data: deletePosition) => this.positionsService.deletePosition(data.payload).pipe(
      map(() => new deletePositionSuccess(data.payload)),
      catchError(error => of(new deletePositionFail(error)))
    ))
  );

  @Effect()
  editPosition$ = this.actions$.pipe(
    ofType(ActionTypes.EDIT_POSITION),
    switchMap((data: editPosition) => this.positionsService.editPosition(data.payload).pipe(
      map((res) => new editPositionSuccess(res)),
      catchError(error => of(new deletePositionFail(error)))
    ))
  );
}