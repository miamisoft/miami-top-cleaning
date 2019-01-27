import { Routes } from "@angular/router";
import { commercialRoutes } from "./@commercial/commercial.routes";
import { residentialRoutes } from "./@residential/residential.routes";
import { windowsRoutes } from "./@windows/windows.routes";
import { PostConstructionComponent } from "./post-construction/post-construction.component";
import { PressureComponent } from "./pressure/pressure.component";


export const servicesRoutes: Routes = [

     ... commercialRoutes,

     ... residentialRoutes,

     ... windowsRoutes,

    {
        path: 'post-construction-cleaning',
        component: PostConstructionComponent,
    },

    {
        path: 'pressure-cleaning',
        component: PressureComponent
    }
     
 ];