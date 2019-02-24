import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';

import { AuthState } from '../../store/reducers';
import { Register } from '../../store/actions/register.actions';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
})
export class RegisterComponent implements OnInit{
  constructor(private store: Store<AuthState>) {}
  @ViewChild('email') email: ElementRef;
  @ViewChild('password') password: ElementRef;
  @ViewChild('password2') password2: ElementRef;

  ngOnInit() {}

  register() {
    const email = this.email.nativeElement.value;
    const password = this.password.nativeElement.value;
    const password2 = this.password2.nativeElement.value;
    if(email.length > 0 && password.length) {
      if (password === password2) {
        this.store.dispatch(new Register({email, password}));
      }
    }
  }
}
