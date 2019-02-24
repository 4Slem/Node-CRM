import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { DepartmentsState } from './store/reducers';
import { Department } from './models/department';
import { selectDepartments } from './store/selectors';
import { createDepartment, deleteDepartment, editDepartment, getDepartments } from './store/actions';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
})
export class DepartmentComponent implements OnInit {
  department$: Observable<Department[]>;

  item = {name: ''};
  @ViewChild('create') create: ElementRef;
  @ViewChild('edit') edit: ElementRef;

  constructor(private store: Store<DepartmentsState>) {}

  ngOnInit() {
    this.department$ = this.store.pipe(select(selectDepartments));

    this.store.dispatch(new getDepartments())
  }

  setItem(data) {
    this.item = data;
  }

  createConfirm() {
    let data = this.create.nativeElement.value;
    if (data && data.length > 1) {
      this.store.dispatch(new createDepartment({name: data}));
    }
    this.create.nativeElement.value = '';
  }

  editConfirm(data) {
    let name = this.edit.nativeElement.value;
    if (name && name.length > 1) {
      const newState = {...data, name: name};
      this.store.dispatch(new editDepartment({data: newState, id: data._id}));
    }
    this.edit.nativeElement.value = this.item.name;
  }

  delete(data) {
    this.store.dispatch(new deleteDepartment(data._id));
  }
}
