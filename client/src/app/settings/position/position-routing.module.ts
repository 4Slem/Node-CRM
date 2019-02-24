import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PositionComponent } from './position.component';

const routes: Routes = [
  { path: '', component: PositionComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PositionRoutingModule { }
