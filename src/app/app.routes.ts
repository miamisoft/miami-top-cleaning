import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";

export const appRoutes: Routes = [
     {
         path: '',
         pathMatch: 'full',
         component: HomeComponent,
         data: {
             title: 'Home',
             urls: [{ title: 'Home', url: '' }]
         }
     },

     {
        path: 'commercial',
        loadChildren: './commercial/commercial.module#CommercialModule'
     },

     {
        path: 'residential',
        loadChildren: './residential/residential.module#ResidentialModule'
     },

     {
        path: 'windows',
        loadChildren: './windows/windows.module#WindowsModule'
     }
 ];