import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { SkillsState } from './store/reducers';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
})
export class SkillComponent implements OnInit {
  constructor(private store: Store<SkillsState>) {}

  ngOnInit() {
    this.store.select('skills').subscribe(res => {
      console.log(res);
    });
  }
}
