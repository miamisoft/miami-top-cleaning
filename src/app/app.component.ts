import { Component } from '@angular/core';
import { AppContext } from './core/appcontext.service';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'miami-top-cleaning';

  constructor(appContext: AppContext, translate: TranslateService) {
    
    translate.setDefaultLang(appContext.currentLan);
    
    appContext.lanObservable.subscribe((lang: string) => {
        translate.use(lang);
    });
  }
}
