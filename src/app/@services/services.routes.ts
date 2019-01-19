import { Routes } from "@angular/router";
import { commercialRoutes } from "./@commercial/commercial.routes";
import { residentialRoutes } from "./@residential/residential.routes";
import { windowsRoutes } from "./@windows/windows.routes";


export const servicesRoutes: Routes = [

     ... commercialRoutes,

     ... residentialRoutes,

     ... windowsRoutes
     
 ];