import { NgModule } from '@angular/core';
import { SharedModule } from '../@shared/shared.module';
import { QuoteComponent } from './quote/quote.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { RouterModule } from '@angular/router';
import { contactUsRoutes } from './contactus.routes';


@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(contactUsRoutes)
  ],
  declarations: [QuoteComponent, ScheduleComponent]
})
export class ContactUsModule { }
