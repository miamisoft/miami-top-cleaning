import { Component, OnInit } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';
import { i18nComponent } from '../core/i18n.component';
import { i18nService } from '../core/i18n.service';

@Component({
  selector: 'app-windows',
  template: ''
})
export class WindowsComponent extends i18nComponent implements OnInit {

  constructor(i18nService: i18nService, translate: TranslateService) {
    super(i18nService, translate);
  }

  ngOnInit(): void {
   
  }

}
