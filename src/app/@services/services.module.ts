import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { servicesRoutes } from './services.routes';
import { CommercialModule } from './@commercial/commercial.module';
import { ResidentialModule } from './@residential/residential.module';
import { WindowsModule } from './@windows/windows.module';

@NgModule({
  imports: [
    CommercialModule,
    ResidentialModule,
    WindowsModule,
    RouterModule.forChild(servicesRoutes)
  ],
  declarations: []
})
export class ServicesModule { }
