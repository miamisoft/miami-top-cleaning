import { NgModule } from '@angular/core';
import { SharedModule } from '../@shared/shared.module';
import { QuoteComponent } from './quote/quote.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { RouterModule } from '@angular/router';
import { contactUsRoutes } from './contactus.routes';
import { QuoteService } from './quote/quote.service';
import { NgxMaskModule} from 'ngx-mask';
import { ToastrModule } from 'ng6-toastr-notifications';


@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(contactUsRoutes),
    NgxMaskModule.forRoot(),
   
  ],
  declarations: [QuoteComponent, ScheduleComponent],
  providers: [QuoteService]
})
export class ContactUsModule { }
