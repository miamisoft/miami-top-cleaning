import { NgModule } from '@angular/core';
import { OfficeComponent } from './office/office.component';
import { FloorComponent } from './floor/floor.component';
import { DustRemovalComponent } from './dust-removal/dust-removal.component';
import { JanitorialComponent } from './janitorial/janitorial.component';
import { SharedModule } from 'src/app/@shared/shared.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    SharedModule,
    RouterModule
  ],
  declarations: [
    OfficeComponent, 
    FloorComponent, 
    DustRemovalComponent, 
    JanitorialComponent
  ]
})
export class CommercialModule { }
