import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { servicesRoutes } from './services.routes';

import { PressureComponent } from './pressure/pressure.component';
import { PostConstructionComponent } from './post-construction/post-construction.component';
import { SharedModule } from '../@shared/shared.module';
import { OfficeComponent } from './commercial/office/office.component';
import { FloorComponent } from './commercial/floor/floor.component';
import { DustRemovalComponent } from './commercial/dust-removal/dust-removal.component';
import { JanitorialComponent } from './commercial/janitorial/janitorial.component';
import { HouseComponent } from './residential/house/house.component';
import { AppartmentComponent } from './residential/appartment/appartment.component';
import { MoveComponent } from './residential/move/move.component';
import { DeepComponent } from './residential/deep/deep.component';
import { WindowComponent } from './windows/window/window.component';
import { HighRiseWindowComponent } from './windows/high-rise-window/high-rise-window.component';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(servicesRoutes)
  ],
  declarations: [
    OfficeComponent, 
    FloorComponent, 
    DustRemovalComponent, 
    JanitorialComponent,
    HouseComponent, 
    AppartmentComponent, 
    MoveComponent, 
    DeepComponent,
    WindowComponent, 
    HighRiseWindowComponent,
    PressureComponent,
    PostConstructionComponent
  ]
})
export class ServicesModule { }
