import { NgModule } from '@angular/core';
import { HouseComponent } from './house/house.component';
import { AppartmentComponent } from './appartment/appartment.component';
import { MoveComponent } from './move/move.component';
import { DeepComponent } from './deep/deep.component';
import { SharedModule } from 'src/app/@shared/shared.module';


@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    HouseComponent, 
    AppartmentComponent, 
    MoveComponent, 
    DeepComponent
  ]
})
export class ResidentialModule { }
