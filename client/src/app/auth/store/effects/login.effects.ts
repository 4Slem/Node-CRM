import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { mergeMap, map, catchError } from 'rxjs/operators';

import * as loginActions from '../actions/login.actions';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';


@Injectable()
export class LoginEffects {
  constructor(private actions$: Actions, private authService: AuthService, private router: Router) {}

  @Effect()
  login$ = this.actions$
    .pipe(
      ofType(loginActions.ActionTypes.LOGIN),
      mergeMap((data: loginActions.Login) => {
        return this.authService.login(data.payload)
          .pipe(
            map((res) => {
              this.router.navigate(['/employee']);
              return new loginActions.LoginSuccess(res);
            }),
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
            map(() => {
              this.router.navigate(['/auth/login']);
              return new loginActions.LogOutSuccess()
            }),
            catchError(() => of(new loginActions.LogOutFail()))
          )
        }
      )
    );
}