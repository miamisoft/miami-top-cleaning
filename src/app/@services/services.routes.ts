import { Routes } from "@angular/router";
import { PostConstructionComponent } from "./post-construction/post-construction.component";
import { PressureComponent } from "./pressure/pressure.component";
import { DustRemovalComponent } from "./commercial/dust-removal/dust-removal.component";
import { FloorComponent } from "./commercial/floor/floor.component";
import { JanitorialComponent } from "./commercial/janitorial/janitorial.component";
import { OfficeComponent } from "./commercial/office/office.component";
import { AppartmentComponent } from "./residential/appartment/appartment.component";
import { HouseComponent } from "./residential/house/house.component";
import { MoveComponent } from "./residential/move/move.component";
import { DeepComponent } from "./residential/deep/deep.component";
import { WindowComponent } from "./window/window.component";



export const servicesRoutes: Routes = [

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
    },

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
    },

    {
        path: 'window-cleaning',
        component: WindowComponent
    },
   

    {
        path: 'post-construction-cleaning',
        component: PostConstructionComponent,
    },

    {
        path: 'pressure-cleaning',
        component: PressureComponent
    }
     
 ];