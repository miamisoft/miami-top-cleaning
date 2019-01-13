import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculatorComponent } from './calculator/calculator.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { CommercialComponent } from './commercial/commercial.component';
import { ResidentialComponent } from './residential/residential.component';
import { WindowsComponent } from './windows/windows.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CommercialComponent,
    ResidentialComponent,
    WindowsComponent,
    CalculatorComponent,
    AppointmentComponent
  ]
})
export class ServicesModule { }
