import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HouseComponent } from './house/house.component';
import { AppartmentComponent } from './appartment/appartment.component';
import { MoveComponent } from './move/move.component';
import { DeepComponent } from './deep/deep.component';
import { PressureComponent } from './pressure/pressure.component';
import { PostConstructionComponent } from './post-construction/post-construction.component';
import { residentialRoutes } from './residential.routes';
import { SharedModule } from '../@shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(residentialRoutes)    
  ],
  declarations: [
    HouseComponent, 
    AppartmentComponent, 
    MoveComponent, 
    DeepComponent, 
    PressureComponent, 
    PostConstructionComponent
  ]
})
export class ResidentialModule { }
