import { NgModule } from '@angular/core';
import { ReviewsComponent } from './reviews.component';
import { SharedModule } from '../@shared/shared.module';
import { RouterModule } from '@angular/router';
import { YelpComponent } from './yelp/yelp.component';
import { FacebookComponent } from './facebook/facebook.component';


@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: ReviewsComponent
      }
    ])
  ],
  declarations: [
    ReviewsComponent, 
    YelpComponent, 
    FacebookComponent
  ]
})
export class ReviewsModule { }
