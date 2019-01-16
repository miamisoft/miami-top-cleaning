import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HouseComponent } from './house/house.component';
import { AppartmentComponent } from './appartment/appartment.component';
import { MoveComponent } from './move/move.component';
import { DeepComponent } from './deep/deep.component';
import { PressureComponent } from './pressure/pressure.component';
import { PostConstructionComponent } from './post-construction/post-construction.component';
import { residentialRoutes } from './residential.routes';


@NgModule({
  imports: [
    CommonModule,
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
