import { Routes } from "@angular/router";
import { DustRemovalComponent } from "./dust-removal/dust-removal.component";
import { FloorComponent } from "./floor/floor.component";
import { JanitorialComponent } from "./janitorial/janitorial.component";
import { OfficeComponent } from "./office/office.component";
import { PostConstructionComponent } from "./post-construction/post-construction.component";
import { PressureComponent } from "./pressure/pressure.component";


export const commercialRoutes: Routes = [
    {
        path: 'commercial',
        children: [
            {
                path: 'high-level-dust-removal',
                component: DustRemovalComponent,
                data: {
                    title: 'Commercial',
                    urls: [{ title: 'Heigh Level Dust Removal', url: '' }]
                }
            },
            {
               path: 'floor-cleaning',
               component: FloorComponent,
               data: {
                   title: 'Commercial',
                   urls: [{ title: 'Heigh Level Dust Removal', url: '' }]
               }
           },
       
           {
               path: 'janitorial-services',
               component: JanitorialComponent,
               data: {
                   title: 'Commercial',
                   urls: [{ title: 'Heigh Level Dust Removal', url: '' }]
               }
           },
       
           {
               path: 'office-cleaning',
               component: OfficeComponent,
               data: {
                   title: 'Commercial',
                   urls: [{ title: 'Heigh Level Dust Removal', url: '' }]
               }
           },
       
           {
               path: 'post-construction-cleaning',
               component: PostConstructionComponent,
               data: {
                   title: 'Commercial',
                   urls: [{ title: 'Heigh Level Dust Removal', url: '' }]
               }
           },
       
           {
               path: 'pressure-cleaning',
               component: PressureComponent,
               data: {
                   title: 'Commercial',
                   urls: [{ title: 'Heigh Level Dust Removal', url: '' }]
               }
           }
        ]
    }
 ];