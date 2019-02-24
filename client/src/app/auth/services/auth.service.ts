import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { User } from '../models/user';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {}

  static isAuth(): boolean {
    return !!AuthService.getToken();
  }

  static getToken(): string {
    return localStorage.getItem('token');
  }

  static setToken(token: string) {
    localStorage.setItem('token', token);
  }

  login(user: User): Observable<{token: string}> {
    return this.http.post<{token: string}>('http://localhost:3000/api/auth/login', user)
      .pipe(tap(({ token }) => {
        AuthService.setToken(token);
      }));
  }

  register(user: User): Observable<User> {
    return this.http.post<User>('http://localhost:3000/api/auth/register', user);
  }

  logout() {
    localStorage.clear();
    return of(true);
  }
}