import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { WindowComponent } from './window/window.component';
import { HighRiseWindowComponent } from './high-rise-window/high-rise-window.component';
import { windowsRoutes } from './windows.routes';
import { SharedModule } from '../@shared/shared.module';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { WindowsComponent } from './windows.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/windows/', '.json');
}
@NgModule({
  imports: [
    SharedModule.forRoot(),
    RouterModule.forChild(windowsRoutes),
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
    WindowsComponent, 
    WindowComponent, 
    HighRiseWindowComponent
  ]
})
export class WindowsModule { }
