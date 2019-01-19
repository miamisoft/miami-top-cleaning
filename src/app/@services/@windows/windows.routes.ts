import { Routes } from "@angular/router";
import { HighRiseWindowComponent } from "./high-rise-window/high-rise-window.component";
import { WindowComponent } from "./window/window.component";

export const windowsRoutes: Routes = [

    {
        path: 'windows',
        children: [
            {
                path: 'window-cleaning',
                component: WindowComponent,
                data: {
                    title: 'Windows',
                    urls: [{ title: '', url: '' }]
                }
            },
            
            {
                 path: 'high-rise-window-cleaning',
                 component: HighRiseWindowComponent,
                 data: {
                     title: 'Windows',
                     urls: [{ title: '', url: '' }]
                 }
             }
        ]
    }
 ];