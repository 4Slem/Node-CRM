import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { mergeMap, map, catchError } from 'rxjs/operators';

import * as loginActions from '../actions/login.actions';
import { AuthService } from '../../services/auth.service';


@Injectable()
export class LoginEffects {
  constructor(private actions$: Actions, private authService: AuthService) {}

  @Effect()
  login$ = this.actions$
    .pipe(
      ofType(loginActions.ActionTypes.LOGIN),
      mergeMap((data: loginActions.Login) => {
        return this.authService.login(data.payload)
          .pipe(
            map(() => new loginActions.LoginSuccess()),
            catchError((err) => of(new loginActions.LoginFail(err.error.message)))
          )
        }
      )
    );

  @Effect()
  logOut$ = this.actions$
    .pipe(
      ofType(loginActions.ActionTypes.LOGOUT),
      mergeMap(() => {
        return this.authService.logout()
          .pipe(
            map(() => new loginActions.LogOutSuccess()),
            catchError(() => of(new loginActions.LogOutFail()))
          )
        }
      )
    );
}