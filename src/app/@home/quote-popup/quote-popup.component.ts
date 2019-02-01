import { Component, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home-quote-popup',
  templateUrl: './quote-popup.component.html',
  styleUrls: ['./quote-popup.component.scss']
})
export class QuotePopupComponent implements AfterViewInit {
  
  @ViewChild('overlay')
  public overlay: ElementRef;

  constructor(private _cookieService: CookieService) { }

  ngAfterViewInit(): void {
    if(!this._cookieService.check(environment.cookieQuotePopup)){
      setTimeout(()=> {
        this.overlay.nativeElement.style.height = "100%";
      },3000);
    }
  }

  close(){
    this.overlay.nativeElement.style.height = "0%";
    this._cookieService.set(environment.cookieQuotePopup, "hidden", 1);
  }

}
