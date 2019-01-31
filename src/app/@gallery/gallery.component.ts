import { Component, OnInit, AfterViewInit } from '@angular/core';
import { GalleryImgData } from '../models/data.models';
import { DataService } from '../core/data.service';
import { AppScripts } from '../core/app.scripts';

@Component({
  selector: 'app-gallery',
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
         AppScripts.setupPrettyPhoto();
      });
   }, error => console.log(error));
  }

}
