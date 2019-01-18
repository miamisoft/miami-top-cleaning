import { Component } from '@angular/core';
import { i18nService } from './core/i18n.service';
import { TranslateService } from '@ngx-translate/core';
import { i18nComponent } from './core/i18n.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent extends i18nComponent{
  title = 'miami-top-cleaning';

  constructor(i18nService: i18nService, translate: TranslateService) {
    super(i18nService, translate);
  }
}
