import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { MapComponent } from './map/map.component';
import { IntroComponent } from './intro/intro.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { SolutionsComponent } from './solutions/solutions.component';
import { ProblemsComponent } from './problems/problems.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { IntroVideoComponent } from './intro-video/intro-video.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { HomeComponent } from './home.component';
import { GalleryComponent } from './gallery/gallery.component';
import { homeRoutes } from './home.routes';
import { SharedModule } from '../@shared/shared.module';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/home/', '.json');
}

@NgModule({
  imports: [
    SharedModule.forRoot(),
    RouterModule.forChild(homeRoutes),
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
    MapComponent,
    IntroComponent,
    TestimonialsComponent,
    SolutionsComponent,
    ProblemsComponent,
    ServicesComponent,
    ContactComponent,
    IntroVideoComponent,
    ContactFormComponent,
    GalleryComponent,
    HomeComponent
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
