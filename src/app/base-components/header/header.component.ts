import { Component, OnInit } from '@angular/core';
import { AppContext } from 'src/app/core/appcontext.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public lang: string;

  constructor(private _appContext: AppContext) { }

  ngOnInit() {
    this.lang = this._appContext.currentLan;
  }

  public changeLanguage(lang: string): void {
    this.lang = lang;
    this._appContext.lanObservable.next(lang);
  }

}
