import { Component, OnInit, Input, ElementRef, AfterViewInit } from '@angular/core';



@Component({
  selector: 'app-home-review-yelp',
  template: `<div></div>`,
  styleUrls: ['./yelp.component.scss']
})
export class YelpReviewComponent implements AfterViewInit {

  @Input()
  public codeSnippet: string;

  constructor(private elementRef: ElementRef) { }

  ngAfterViewInit() {
    var snippet = document.createElement("div");
    snippet.innerHTML = this.codeSnippet;
    this.elementRef.nativeElement.appendChild(snippet);
    
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "https://www.yelp.com/embed/widgets.js";
    script.async = true;
    this.elementRef.nativeElement.appendChild(script);
  }

}
