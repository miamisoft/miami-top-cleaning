import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { servicesRoutes } from './services.routes';

import { PressureComponent } from './others/pressure/pressure.component';
import { PostConstructionComponent } from './others/post-construction/post-construction.component';
import { SharedModule } from '../@shared/shared.module';
import { OfficeComponent } from './commercial/office/office.component';
import { FloorComponent } from './others/floor/floor.component';
import { DustRemovalComponent } from './others/dust-removal/dust-removal.component';
import { JanitorialComponent } from './others/janitorial/janitorial.component';
import { HouseComponent } from './others/residential/house/house.component';
import { AppartmentComponent } from './others/residential/appartment/appartment.component';
import { MoveComponent } from './others/residential/move/move.component';
import { DeepComponent } from './others/residential/deep/deep.component';
import { WindowComponent } from './others/window/window.component';
import { CarpetComponent } from './floor/carpet/carpet.component';
import { TileComponent } from './floor/tile/tile.component';
import { MarbleComponent } from './floor/marble/marble.component';
import { WaxingComponent } from './floor/waxing/waxing.component';
import { GroundsKeepingComponent } from './commercial/grounds-keeping/grounds-keeping.component';
import { BuildingMaintenanceComponent } from './commercial/building-maintenance/building-maintenance.component';
import { RoughComponent } from './construction/rough/roughcomponent';
import { FinalCleaningComponent } from './construction/final/final.component';
import { TouchUpComponent } from './construction/touchup/touchup.component';
import { TrashRemovalComponent } from './others/trash-removal/trash-removal.component';

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
    PressureComponent,
    PostConstructionComponent,
    CarpetComponent,
    TileComponent,
    MarbleComponent,
    WaxingComponent,
    GroundsKeepingComponent,
    BuildingMaintenanceComponent,
    TrashRemovalComponent,
    RoughComponent,
    FinalCleaningComponent,
    TouchUpComponent,
  ]
})
export class ServicesModule { }
