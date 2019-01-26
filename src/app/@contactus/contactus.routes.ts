
import { Routes } from "@angular/router";
import { ScheduleComponent } from "./schedule/schedule.component";
import { QuoteComponent } from "./quote/quote.component";

export const contactUsRoutes: Routes = [

    {
        path: '',
        component: QuoteComponent,
    },

    {
        path: 'get-quote',
        component: QuoteComponent,
    },
    
    {
       path: 'schedule-cleaning',
       component: ScheduleComponent
   }
 ];