import { Routes } from "@angular/router";


export const appRoutes: Routes = [

   {
      path: '',
      loadChildren: './@home/home.module#HomeModule'
   },

   {
      path: 'services',
      loadChildren: './@services/services.module#ServicesModule'
   },

   {
      path: 'reviews',
      loadChildren: './@reviews/reviews.module#ReviewsModule'
   },

   {
      path: 'blog',
      loadChildren: './@blog/blog.module#BlogModule'
   }
];