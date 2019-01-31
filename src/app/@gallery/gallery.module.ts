import { NgModule } from '@angular/core';
import { SharedModule } from '../@shared/shared.module';

import { RouterModule } from '@angular/router';
import { GalleryComponent } from './gallery.component';


@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: GalleryComponent
      }
    ])
  ],
  declarations: [
    GalleryComponent
  ],
  providers: [
    
  ]
})
export class GalleryModule { }
