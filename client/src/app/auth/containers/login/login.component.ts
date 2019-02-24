import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { AuthState } from '../../store/reducers';
import { Login, LogOut } from '../../store/actions/login.actions';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  constructor(private store: Store<AuthState>) {}

  login() {
    this.store.dispatch(new Login({email: 'Slem', password: '123456'}));
  }

  logout() {
    this.store.dispatch(new LogOut());
  }
}
