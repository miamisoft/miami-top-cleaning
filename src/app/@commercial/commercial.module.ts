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
import { SharedModule } from '../@shared/shared.module';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/commercial', '.json');
}

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(commercialRoutes),
    TranslateModule.forChild({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      },
      isolate: true
    })
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
