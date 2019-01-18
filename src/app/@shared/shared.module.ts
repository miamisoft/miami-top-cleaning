
import { NgModule, ModuleWithProviders } from '@angular/core';
import { AppointmentComponent } from './appointment/appointment.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { AppContext } from '../core/appcontext.service';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    AppointmentComponent,
    CalculatorComponent,    
  ],
  imports: [
     CommonModule,
     HttpClientModule,
     TranslateModule
  ],
  exports:[
    CommonModule,
    HttpClientModule,
    TranslateModule,
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
        AppContext
      ]
    };
  }
}
