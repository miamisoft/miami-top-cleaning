import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { DataService } from 'src/app/core/data.service';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';
import { VideoIntroData } from 'src/app/models/data.models';



@Component({
  selector: 'app-home-intro-video',
  templateUrl: './intro-video.component.html',
  styleUrls: ['./intro-video.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class IntroVideoComponent implements AfterViewInit {

  public data: VideoIntroData[] = [];

  constructor(private _dataService: DataService, private sanitizer: DomSanitizer) {}

  ngAfterViewInit(): void {
    this._dataService.geti18nData('videos').subscribe((res: VideoIntroData[]) => {
      this.data = res;
   }, error => console.log(error));
  }

  public backgroundImgUrl(imageUrl: string): SafeStyle {
    return this.sanitizer.bypassSecurityTrustStyle(`url(${imageUrl})`);
  }

}
