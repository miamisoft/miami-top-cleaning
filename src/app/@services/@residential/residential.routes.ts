import { Routes } from "@angular/router";
import { AppartmentComponent } from "./appartment/appartment.component";
import { HouseComponent } from "./house/house.component";
import { MoveComponent } from "./move/move.component";
import { PostConstructionComponent } from "./post-construction/post-construction.component";
import { DeepComponent } from "./deep/deep.component";
import { PressureComponent } from "./pressure/pressure.component";


export const residentialRoutes: Routes = [
    {
        path: 'residential',
        children: [
            {
                path: 'appartment-cleaning',
                component: AppartmentComponent,
                data: {
                    title: 'Residential',
                    urls: [{ title: '', url: '' }]
                }
            },
            {
               path: 'house-cleaning',
               component: HouseComponent,
               data: {
                   title: 'Residential',
                   urls: [{ title: '', url: '' }]
               }
           },
       
           {
               path: 'movein-moveout-cleaning',
               component: MoveComponent,
               data: {
                   title: 'Residential',
                   urls: [{ title: '', url: '' }]
               }
           },
       
           {
               path: 'pressure-cleaning',
               component: PressureComponent,
               data: {
                   title: 'Residential',
                   urls: [{ title: '', url: '' }]
               }
           },
       
           {
               path: 'post-construction-cleaning',
               component: PostConstructionComponent,
               data: {
                   title: 'Residential',
                   urls: [{ title: '', url: '' }]
               }
           },
       
           {
               path: 'deep-cleaning',
               component: DeepComponent,
               data: {
                   title: 'Residential',
                   urls: [{ title: '', url: '' }]
               }
           }
        ]
    }
     
 ];