import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { AuthService } from '../../auth/services/auth.service';
import { LogOut } from '../../auth/store/actions/login.actions';
import {Router} from "@angular/router";


@Injectable()
export class HttpService implements HttpInterceptor {
  constructor(private store: Store<any>, private router: Router) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (AuthService.isAuth()) {
      req = req.clone({
        headers: req.headers.set('Authorization', AuthService.getToken())
      });
    }
    return next.handle(req).pipe(
      catchError(error => {
        if (error.status === 401) {
          this.router.navigate(['/auth/login']);
          this.store.dispatch(new LogOut());
        }
        return of(error);
      })
    );
  }
}