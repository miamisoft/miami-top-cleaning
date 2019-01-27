import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { servicesRoutes } from './services.routes';
import { CommercialModule } from './@commercial/commercial.module';
import { ResidentialModule } from './@residential/residential.module';
import { WindowsModule } from './@windows/windows.module';
import { PressureComponent } from './pressure/pressure.component';
import { PostConstructionComponent } from './post-construction/post-construction.component';
import { SharedModule } from '../@shared/shared.module';

@NgModule({
  imports: [
    CommercialModule,
    ResidentialModule,
    WindowsModule,
    SharedModule,
    RouterModule.forChild(servicesRoutes)
  ],
  declarations: [
    PressureComponent,
    PostConstructionComponent
  ]
})
export class ServicesModule { }
