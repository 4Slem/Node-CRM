import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsRoutingModule } from './settings-routing.module';

import { SettingComponent } from './setting.component';

@NgModule({
  imports: [
    CommonModule,
    SettingsRoutingModule,
  ],
  declarations: [
    SettingComponent
  ]
})
export class SettingsModule {}