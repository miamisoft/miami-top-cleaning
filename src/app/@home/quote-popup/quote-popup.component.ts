import { Component, ViewChild, AfterViewInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-home-quote-popup',
  templateUrl: './quote-popup.component.html',
  styleUrls: ['./quote-popup.component.scss']
})
export class QuotePopupComponent implements AfterViewInit {
  
  @ViewChild('overlay')
  public overlay: ElementRef;

  constructor() { }

  ngAfterViewInit(): void {
    setTimeout(()=> {
      this.overlay.nativeElement.style.height = "100%";
    },3000);
    
  }

  close(){
    this.overlay.nativeElement.style.height = "0%";
  }

}
