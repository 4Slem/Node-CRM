import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Employee } from './models/employee';
import { createEmployee, deleteEmployee, editEmployee, getAllEmployee } from './store/actions';
import { selectAllEmployee } from './store/selectors';
import { Skill } from '../settings/skill/models/skill';
import { Position } from '../settings/position/models/positions';
import { Department } from '../settings/department/models/department';
import { selectSkills } from '../settings/skill/store/selectors';
import { selectPositions } from '../settings/position/store/selectors';
import { selectDepartments } from '../settings/department/store/selectors';
import { getSkills } from '../settings/skill/store/actions';
import { getPositions } from '../settings/position/store/actions';
import { getDepartments } from '../settings/department/store/actions';



@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
})
export class EmployeeComponent implements OnInit {
  allEmployee$: Observable<Employee[]>;
  skills$: Observable<Skill[]>;
  positions$: Observable<Position[]>;
  department$: Observable<Department[]>;

  item = null;
  @ViewChild('name') name: ElementRef;
  @ViewChild('surname') surname: ElementRef;
  skills = {};
  department = null;
  position = null;
  active;

  @ViewChild('namee') namee: ElementRef;
  @ViewChild('surnamee') surnamee: ElementRef;
  @ViewChild('namesearch') namesearch: ElementRef;
  skillse = {};
  departmente;
  positione;
  activee;


  constructor(private store: Store<any>) {}

  ngOnInit() {
    this.getEmployee();
    this.allEmployee$ = this.store.pipe(select(selectAllEmployee));
  }

  select() {
    this.store.dispatch(new getSkills());
    this.store.dispatch(new getPositions());
    this.store.dispatch(new getDepartments());

    this.skills$ = this.store.pipe(select(selectSkills));
    this.positions$ = this.store.pipe(select(selectPositions));
    this.department$ = this.store.pipe(select(selectDepartments));
  }

  getEmployee() {
    const query = {};
    if(this.namesearch.nativeElement.value.length > 1) {
      query['name'] = this.namesearch.nativeElement.value
    }
    this.store.dispatch(new getAllEmployee(query));
  }

  setItem(data) {
    this.item = data;
    this.select();
  }

  createConfirm() {
    let name = this.name.nativeElement.value;
    let surname = this.surname.nativeElement.value;
    if (name && name.length > 1 && surname && surname.length > 1) {
      this.store.dispatch(new createEmployee({name, surname, department: this.department, position: this.position, skills: Object.keys(this.skills), active: this.active}));
    }
  }

  editConfirm(data) {
    let name = this.namee.nativeElement.value;
    let surname = this.surnamee.nativeElement.value;
    if (name && name.length > 1 && surname && surname.length > 1) {

      let user = {name, surname, active: this.activee};
      if (this.departmente) {
        user['department'] = this.departmente;
      } else {user['department'] = this.item.department;}
      if (this.positione) {
        user['position'] = this.positione;
      }else {user['position'] = this.item.position;}
      if (Object.keys(this.skills).length > 0) {
        user['skills'] = Object.keys(this.skills);
      }else {user['skills'] = this.item.skills;}
      this.store.dispatch(new editEmployee({data: user, id: data._id}));
    }
  }

  delete(data) {
    this.store.dispatch(new deleteEmployee(data._id));
  }

  setDepartment(data) {
    this.department = data._id;
  }

  setPos(data) {
    this.position = data._id;
  }

  setSkills(e, data) {
    if(e.target.checked) {
      this.skills[data._id] = data._id;
    } else {
      delete this.skills[data._id];
    }
  }

  setActive(e) {
    if (e.target.checked) {
      this.active = 1;
    } else {
      this.active = 0;
    }
  }

  check(item) {
    for(let i of this.item.skills) {
      if (i._id == item._id) return true;
    }
  }

  setDepartmente(data) {
    this.departmente = data._id;
  }

  setPose(data) {
    this.positione = data._id;
  }

  setSkillse(e, data) {
    if(e.target.checked) {
      this.skillse[data._id] = data._id;
    } else {
      delete this.skillse[data._id];
    }
  }

  setActivee(e) {
    if (e.target.checked) {
      this.activee = 1;
    } else {
      this.activee = 0;
    }
  }
}
