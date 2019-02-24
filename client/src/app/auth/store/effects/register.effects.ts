import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { mergeMap, map, catchError } from 'rxjs/operators';

import * as registerActions from '../actions/register.actions';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';


@Injectable()
export class RegisterEffects {
  constructor(private actions$: Actions, private authService: AuthService, private router: Router) {}

  @Effect()
  register = this.actions$
    .pipe(
      ofType(registerActions.ActionTypes.REGISTER),
      mergeMap((data: registerActions.Register) => this.authService.register(data.payload)
        .pipe(
          map(() => {
            this.router.navigate(['/auth/login']);
            return new registerActions.RegisterSuccess()
          }),
          catchError((err) => of(new registerActions.RegisterFail(err.error.message)))
        )
      )
    );
}