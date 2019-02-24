import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';

import { reducer } from './store/reducers';
import { SkillsEffect } from './store/effects';

import { SkillRoutingModule } from './skill-routing.module';
import { SkillComponent } from './skill.component';


@NgModule({
  declarations: [
    SkillComponent
  ],
  imports: [
    CommonModule,
    SkillRoutingModule,
    StoreModule.forFeature('skills', reducer),
    EffectsModule.forRoot([SkillsEffect]),
  ],
  providers: []
})
export class SkillModule { }
