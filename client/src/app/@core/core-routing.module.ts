import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  // { path: 'employee', loadChildren: './../employee/employee.module#EmployeeModule', canActivate: [AuthGuard] },
  // { path: 'settings', loadChildren: './../settings/settings.module#SettingsModule', canActivate: [AuthGuard] },
  { path: '', loadChildren: './../admin/admin.module#AdminModule' },
  { path: 'auth', loadChildren: './../auth/auth.module#AuthModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
