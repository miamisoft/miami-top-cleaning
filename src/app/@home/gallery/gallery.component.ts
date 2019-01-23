import { Component, OnInit, AfterViewInit } from '@angular/core';
import { AppScripts } from 'src/app/core/app.scripts';
import { DataService } from 'src/app/core/data.service';

interface GalleryImgData{
  imgUrl: string;
  desc: string;
}

@Component({
  selector: 'app-home-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements AfterViewInit {
  
  public data: GalleryImgData[] = [];

  constructor(private _dataService: DataService) { }

  ngAfterViewInit(): void {
    this._dataService.geti18nData('gallery').subscribe((res: GalleryImgData[]) => {
      this.data = res;
      setTimeout(() => {
        AppScripts.setupCarousel('.gallery-owl-carousel');
        AppScripts.setupPrettyPhoto();
      });
   }, error => console.log(error));
  }
}
