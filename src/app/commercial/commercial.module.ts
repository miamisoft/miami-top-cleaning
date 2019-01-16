import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OfficeComponent } from './office/office.component';
import { FloorComponent } from './floor/floor.component';
import { PressureComponent } from './pressure/pressure.component';
import { DustRemovalComponent } from './dust-removal/dust-removal.component';
import { JanitorialComponent } from './janitorial/janitorial.component';
import { PostConstructionComponent } from './post-construction/post-construction.component';
import { RouterModule } from '@angular/router';
import { commercialRoutes } from './commercial.routes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(commercialRoutes)
  ],
  declarations: [
    OfficeComponent, 
    FloorComponent, 
    PressureComponent, 
    DustRemovalComponent, 
    JanitorialComponent, 
    PostConstructionComponent
  ]
})
export class CommercialModule { }
