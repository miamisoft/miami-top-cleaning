
import { NgModule } from '@angular/core';
import { AppointmentComponent } from './appointment/appointment.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    AppointmentComponent,
    CalculatorComponent,    
  ],
  imports: [
     CommonModule,
     HttpClientModule
  ],
  exports:[
    CommonModule,
    HttpClientModule,
    AppointmentComponent,
    CalculatorComponent
  ],
  providers: []
})
export class SharedModule { }
