import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { reducer } from './store/reducers';
import { DepartmentsEffect } from './store/effects';

import { DepartmentRoutingModule } from './department-routing.module';
import { DepartmentComponent } from './department.component';


@NgModule({
  declarations: [
    DepartmentComponent,
  ],
  imports: [
    CommonModule,
    DepartmentRoutingModule,
    StoreModule.forFeature('department', reducer),
    EffectsModule.forFeature([DepartmentsEffect]),
  ],
  providers: []
})
export class DepartmentModule { }
