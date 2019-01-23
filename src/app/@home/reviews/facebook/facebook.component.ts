import { Component, OnInit, Input, AfterViewInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-home-review-facebook',
  template: `<div></div>`,
  styleUrls: ['./facebook.component.scss']
})
export class FacebookReviewComponent implements AfterViewInit {
  
  @Input()
  public codeSnippet: string;

  constructor(private elementRef: ElementRef) { }

  ngAfterViewInit() {
    var snippet = document.createElement("div");
    snippet.innerHTML = this.codeSnippet;
    this.elementRef.nativeElement.appendChild(snippet);
  }

}
