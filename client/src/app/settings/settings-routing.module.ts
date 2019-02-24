import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SettingComponent } from './setting.component';


const routes: Routes = [
  { path: '', component: SettingComponent, children:
      [
          { path: 'position', loadChildren: './position/position.module#PositionModule'},
          { path: 'department', loadChildren: './department/department.module#DepartmentModule'},
          { path: 'skill', loadChildren: './skill/skill.module#SkillModule'},
          { path: '', pathMatch: 'full', redirectTo: 'department'},
      ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }