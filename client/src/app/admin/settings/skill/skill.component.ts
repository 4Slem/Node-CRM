import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Skill } from './models/skill';
import { createSkill, deleteSkill, editSkill, getSkills } from './store/actions';
import { selectSkills } from './store/selectors';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
})
export class SkillComponent implements OnInit {
  skills$: Observable<Skill[]>;

  item = {name: ''};
  @ViewChild('create') create: ElementRef;
  @ViewChild('edit') edit: ElementRef;

  constructor(private store: Store<any>) {}

  ngOnInit() {
    this.skills$ = this.store.pipe(select(selectSkills));

    this.store.dispatch(new getSkills())
  }

  setItem(data) {
    this.item = data;
  }

  createConfirm() {
    let data = this.create.nativeElement.value;
    if (data && data.length > 1) {
      this.store.dispatch(new createSkill({name: data}));
    }
    this.create.nativeElement.value = '';
  }

  editConfirm(data) {
    let name = this.edit.nativeElement.value;
    if (name && name.length > 1) {
      const newState = {...data, name: name};
      this.store.dispatch(new editSkill({data: newState, id: data._id}));
    }
    this.edit.nativeElement.value = this.item.name;
  }

  delete(data) {
    this.store.dispatch(new deleteSkill(data._id));
  }
}
