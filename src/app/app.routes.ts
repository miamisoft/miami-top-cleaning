import { Routes } from "@angular/router";


export const appRoutes: Routes = [

   {
      path: '',
      loadChildren: './@home/home.module#HomeModule'
   },

   {
      path: 'commercial',
      loadChildren: './@commercial/commercial.module#CommercialModule'
   },

   {
      path: 'residential',
      loadChildren: './@residential/residential.module#ResidentialModule'
   },

   {
      path: 'windows',
      loadChildren: './@windows/windows.module#WindowsModule'
   }
];