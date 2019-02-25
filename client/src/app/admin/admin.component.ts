import { Component, OnInit } from '@angular/core';
import {select, Store} from '@ngrx/store';

import {AuthState, getLoginState} from '../auth/store/reducers';
import { LogOut } from '../auth/store/actions/login.actions';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
})
export class AdminComponent implements OnInit{
  constructor(private store: Store<AuthState>) {}

  ngOnInit() {
  };
  
  logout() {
    this.store.dispatch(new LogOut())
  }
}