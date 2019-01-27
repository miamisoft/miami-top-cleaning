import { Routes } from "@angular/router";
import { AppartmentComponent } from "./appartment/appartment.component";
import { HouseComponent } from "./house/house.component";
import { MoveComponent } from "./move/move.component";
import { DeepComponent } from "./deep/deep.component";


export const residentialRoutes: Routes = [
    {
        path: 'residential',
        children: [
            {
                path: 'appartment-cleaning',
                component: AppartmentComponent,
            },
            {
               path: 'house-cleaning',
               component: HouseComponent
           },
       
           {
               path: 'movein-moveout-cleaning',
               component: MoveComponent
           },
           
           {
               path: 'deep-cleaning',
               component: DeepComponent
           }
        ]
    }
     
 ];