
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { AppContext } from '../core/appcontext.service';
import { TranslateModule } from '@ngx-translate/core';
import { DataService } from '../core/data.service';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { RouterModule } from '@angular/router';
import { MapComponent } from './map/map.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    BreadcrumbsComponent,
    MapComponent,
    ContactComponent
  ],
  imports: [
     RouterModule,
     CommonModule,
     FormsModule,
     HttpClientModule,
     TranslateModule
  ],
  exports:[
    CommonModule,
    FormsModule,
    HttpClientModule,
    TranslateModule,
    BreadcrumbsComponent,
    MapComponent,
    ContactComponent
  ],
  providers: []
})
export class SharedModule { 
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [ 
        CookieService, 
        AppContext,
        DataService
      ]
    };
  }
}
