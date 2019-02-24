import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { reducer } from './store/reducers';
import { AllEmployeeEffect } from './store/effects';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeComponent } from './employee.component';


@NgModule({
  declarations: [
    EmployeeComponent,
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    StoreModule.forFeature('employee', reducer),
    EffectsModule.forFeature([AllEmployeeEffect]),
  ],
  providers: []
})
export class EmployeeModule { }
