import { Component, OnInit } from '@angular/core';

import { fromSelector, fromReducer } from './store';
import {select, Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {Employee} from "./models/employee";
import {getAllEmployee} from "./store/actions";


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
})
export class EmployeeComponent implements OnInit {
  allEmployee$: Observable<Employee[]>;

  constructor(private store: Store<fromReducer.AllEmployeeState>) {}


  ngOnInit() {
    this.store.select(fromSelector.selectAllEmployee).subscribe(res => {

    });

    this.store.dispatch(new getAllEmployee())
  }
}
