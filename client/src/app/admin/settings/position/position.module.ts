import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { reducer } from './store/reducers';
import { PositionsEffect } from './store/effects';

import { PositionRoutingModule } from './position-routing.module';
import { PositionComponent } from './position.component';


@NgModule({
  declarations: [
    PositionComponent,
  ],
  imports: [
    CommonModule,
    PositionRoutingModule,
    StoreModule.forFeature('positions', reducer),
    EffectsModule.forFeature([PositionsEffect]),
  ],
  exports: [StoreModule, EffectsModule]
})
export class PositionModule { }
