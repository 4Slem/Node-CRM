import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { DepartmentsState } from './store/reducers';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
})
export class DepartmentComponent implements OnInit {
  constructor(private store: Store<DepartmentsState>) {}

  ngOnInit() {
    this.store.select('department').subscribe(res => {
      console.log(res);
    });
  }
}
