
import { Routes } from '@angular/router';
import { QuoteComponent } from './quote/quote.component';
import { EmploymentComponent } from './employment/employment.component';

export const contactUsRoutes: Routes = [

    {
        path: '',
        component: QuoteComponent,
    },

    {
        path: 'get-quote/:serviceid',
        component: QuoteComponent,
    },

    {
       path: 'employment',
       component: EmploymentComponent
   }
 ];
