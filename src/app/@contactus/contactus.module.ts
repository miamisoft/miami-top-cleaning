import { NgModule } from '@angular/core';
import { SharedModule } from '../@shared/shared.module';
import { QuoteComponent } from './quote/quote.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { RouterModule } from '@angular/router';
import { contactUsRoutes } from './contactus.routes';
import { QuoteService } from './quote/quote.service';


@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(contactUsRoutes)
  ],
  declarations: [QuoteComponent, ScheduleComponent],
  providers: [QuoteService]
})
export class ContactUsModule { }
