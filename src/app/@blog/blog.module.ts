import { NgModule } from '@angular/core';
import { SharedModule } from '../@shared/shared.module';
import { BlogComponent } from './blog.component';
import { RouterModule } from '@angular/router';
import { BlogService } from './blog.service';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: BlogComponent
      }
    ])
  ],
  declarations: [
    BlogComponent
  ],
  providers: [
    BlogService
  ]
})
export class BlogModule { }
