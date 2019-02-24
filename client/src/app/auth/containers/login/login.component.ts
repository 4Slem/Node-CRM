import {Component, ElementRef, ViewChild} from '@angular/core';
import { Store } from '@ngrx/store';

import { AuthState } from '../../store/reducers';
import { Login } from '../../store/actions/login.actions';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  constructor(private store: Store<AuthState>) {}
  @ViewChild('email') email: ElementRef;
  @ViewChild('password') password: ElementRef;

  login() {
    const email = this.email.nativeElement.value;
    const password = this.password.nativeElement.value;
    if(email.length > 0 && password.length) {
      this.store.dispatch(new Login({email, password}));
    }
  }
}
