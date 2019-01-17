import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {  RouterModule } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { appRoutes } from './app.routes';
import { AppComponent } from './app.component';
import { NavigationComponent } from './base-components/navigation/navigation.component';
import { HeaderComponent } from './base-components/header/header.component';
import { FooterComponent } from './base-components/footer/footer.component';

import { SearchComponent } from './base-components/search/search.component';
import { SharedModule } from './@shared/shared.module';


export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/base', '.json');
}

@NgModule({
  declarations: [
    NavigationComponent,
    HeaderComponent,
    FooterComponent,
    SearchComponent,
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    RouterModule.forRoot(appRoutes, { useHash: false }),
    TranslateModule.forRoot({
     loader: {
       provide: TranslateLoader,
       useFactory: HttpLoaderFactory,
       deps: [HttpClient]
     }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
