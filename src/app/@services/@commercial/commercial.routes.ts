import { Routes } from "@angular/router";
import { DustRemovalComponent } from "./dust-removal/dust-removal.component";
import { FloorComponent } from "./floor/floor.component";
import { JanitorialComponent } from "./janitorial/janitorial.component";
import { OfficeComponent } from "./office/office.component";

export const commercialRoutes: Routes = [
    {
        path: 'commercial',
        children: [
            {
                path: 'high-level-dust-removal',
                component: DustRemovalComponent
            },
            {
               path: 'floor-cleaning',
               component: FloorComponent
           },
       
           {
               path: 'janitorial-services',
               component: JanitorialComponent
           },
       
           {
               path: 'office-cleaning',
               component: OfficeComponent
           }
       
           
        ]
    }
 ];