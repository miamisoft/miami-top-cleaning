import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { SolutionsComponent } from './solutions/solutions.component';
import { ProblemsComponent } from './problems/problems.component';
import { ServicesComponent } from './services/services.component';
import { IntroVideoComponent } from './intro-video/intro-video.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { HomeComponent } from './home.component';
import { GalleryComponent } from './gallery/gallery.component';
import { homeRoutes } from './home.routes';
import { SharedModule } from '../@shared/shared.module';
import { IntroComponent } from './intro/intro.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { FacebookReviewComponent } from './reviews/facebook/facebook.component';
import { YelpReviewComponent } from './reviews/yelp/yelp.component';
import { TeamComponent } from './team/team.component';



@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(homeRoutes)
  ],
  declarations: [
    IntroComponent,
    SolutionsComponent,
    ProblemsComponent,
    ServicesComponent,
    IntroVideoComponent,
    ContactFormComponent,
    GalleryComponent,
    YelpReviewComponent,
    FacebookReviewComponent,
    ReviewsComponent,
    TeamComponent,
    HomeComponent
  ],
  providers: [
    
  ]
})
export class HomeModule { }
