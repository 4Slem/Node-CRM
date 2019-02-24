import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminComponent } from './admin.component';


const routes: Routes = [
  { path: '', component: AdminComponent, children:
      [
        { path: 'employee', loadChildren: './employee/employee.module#EmployeeModule' },
        { path: 'settings', loadChildren: './settings/settings.module#SettingsModule' },
        { path: '', pathMatch: 'full', redirectTo: 'settings' },
      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}