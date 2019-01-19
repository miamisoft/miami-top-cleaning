import { Component, OnInit, AfterViewInit } from '@angular/core';
import { AppScripts } from 'src/app/core/app.scripts';



@Component({
  selector: 'app-home-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent implements AfterViewInit {
  

  constructor() { }

  ngAfterViewInit(): void {
      AppScripts.setupCarousel('.testimonials-owl-carousel');
  }

  

}
