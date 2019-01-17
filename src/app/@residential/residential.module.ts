import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HouseComponent } from './house/house.component';
import { AppartmentComponent } from './appartment/appartment.component';
import { MoveComponent } from './move/move.component';
import { DeepComponent } from './deep/deep.component';
import { PressureComponent } from './pressure/pressure.component';
import { PostConstructionComponent } from './post-construction/post-construction.component';
import { residentialRoutes } from './residential.routes';
import { SharedModule } from '../@shared/shared.module';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/residential', '.json');
}

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(residentialRoutes),
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
    HouseComponent, 
    AppartmentComponent, 
    MoveComponent, 
    DeepComponent, 
    PressureComponent, 
    PostConstructionComponent
  ]
})
export class ResidentialModule { }
