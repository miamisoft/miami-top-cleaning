import { Component, OnInit, AfterViewInit } from '@angular/core';
import { AppScripts } from 'src/app/core/app.scripts';

@Component({
  selector: 'app-home-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements AfterViewInit {
  

  constructor() { }

  ngAfterViewInit(): void {
    AppScripts.setupCarousel('.gallery-owl-carousel');
    AppScripts.setupPrettyPhoto();
  }

}
