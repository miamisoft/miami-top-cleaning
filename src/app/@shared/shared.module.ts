
import { NgModule, ModuleWithProviders } from '@angular/core';
import { AppointmentComponent } from './appointment/appointment.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { i18nService } from '../core/i18n.service';

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
export class SharedModule { 
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [ 
        CookieService, 
        i18nService
      ]
    };
  }
}
