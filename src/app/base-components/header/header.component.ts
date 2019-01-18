import { Component, OnInit } from '@angular/core';
import { i18nService } from 'src/app/core/i18n.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public lang: string;

  constructor(private _i18nService: i18nService) { }

  ngOnInit() {
    this.lang = this._i18nService.currentLan;
  }

  public changeLanguage(lang: string): void {
    this.lang = lang;
    this._i18nService.lanObservable.next(lang);
  }

}
