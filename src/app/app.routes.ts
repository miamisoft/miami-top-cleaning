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
      path: 'gallery',
      loadChildren: './@gallery/gallery.module#GalleryModule'
   },

   {
      path: 'contactus',
      loadChildren: './@contactus/contactus.module#ContactUsModule'
   }
];