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


@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(homeRoutes),
  
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
  ]
})
export class HomeModule { }
