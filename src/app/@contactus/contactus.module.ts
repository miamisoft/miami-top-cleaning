import { NgModule } from '@angular/core';
import { SharedModule } from '../@shared/shared.module';
import { QuoteComponent } from './quote/quote.component';
import { RouterModule } from '@angular/router';
import { contactUsRoutes } from './contactus.routes';
import { QuoteService } from './quote/quote.service';
import { NgxMaskModule} from 'ngx-mask';
import { EmploymentComponent } from './employment/employment.component';


@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(contactUsRoutes),
    NgxMaskModule.forRoot(),

  ],
  declarations: [QuoteComponent, EmploymentComponent],
  providers: [QuoteService]
})
export class ContactUsModule { }
