import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

import {
  ActionTypes,
  createSkill, createSkillFail,
  createSkillSuccess, deleteSkill, deleteSkillFail, deleteSkillSuccess, editSkill, editSkillSuccess,
  getSkillFail,
  getSkillsSuccess
} from '../actions/index';
import { SkillsServices } from '../../services/skill.service';


@Injectable({
  providedIn: 'root',
})

export class SkillsEffect {
  constructor(private actions$: Actions, private skillsServices: SkillsServices) {}

  @Effect()
  getSkills$ = this.actions$.pipe(
    ofType(ActionTypes.GET_SKILLS),
    switchMap(() => this.skillsServices.getSkills().pipe(
      map(res => new getSkillsSuccess(res)),
      catchError(error => of(new getSkillFail(error)))
    ))
  );

  @Effect()
  createSkill$ = this.actions$.pipe(
    ofType(ActionTypes.CREATE_SKILL),
    switchMap((data: createSkill) => this.skillsServices.createSkill(data.payload).pipe(
      map(res => new createSkillSuccess(res)),
      catchError(error => of(new createSkillFail(error)))
    ))
  );

  @Effect()
  deleteSkill$ = this.actions$.pipe(
    ofType(ActionTypes.DELETE_SKILL),
    switchMap((data: deleteSkill) => this.skillsServices.deleteSkill(data.payload).pipe(
      map(() => new deleteSkillSuccess(data.payload)),
      catchError(error => of(new deleteSkillFail(error)))
    ))
  );

  @Effect()
  editSkill$ = this.actions$.pipe(
    ofType(ActionTypes.EDIT_SKILL),
    switchMap((data: editSkill) => this.skillsServices.editSkill(data.payload).pipe(
      map((res) => new editSkillSuccess(res)),
      catchError(error => of(new deleteSkillFail(error)))
    ))
  );
}