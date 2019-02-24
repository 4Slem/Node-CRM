import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { mergeMap, map, catchError } from 'rxjs/operators';

import * as registerActions from '../actions/register.actions';
import { AuthService } from '../../services/auth.service';


@Injectable()
export class RegisterEffects {
  constructor(private actions$: Actions, private authService: AuthService) {}

  @Effect()
  register = this.actions$
    .pipe(
      ofType(registerActions.ActionTypes.REGISTER),
      mergeMap((data: registerActions.Register) => this.authService.register(data.payload)
        .pipe(
          map(() => new registerActions.RegisterSuccess()),
          catchError((err) => of(new registerActions.RegisterFail(err.error.message)))
        )
      )
    );
}