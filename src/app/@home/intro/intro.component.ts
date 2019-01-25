import { Component, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { DataService } from 'src/app/core/data.service';
import { AppScripts } from 'src/app/core/app.scripts';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';

interface IntroData {
    imgUrl: string;
    title: string;
    slogan: string;
    desc: string;
}

@Component({
  selector: 'app-home-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class IntroComponent implements AfterViewInit {
  
  public data: IntroData[] = [];

  constructor(private _dataService: DataService, 
              private sanitizer: DomSanitizer) { }

  ngAfterViewInit(): void {
    this._dataService.geti18nData('intro').subscribe((res: IntroData[]) => {
      this.data = res;
      setTimeout(() => {
        AppScripts.setupFlexSlider();
      });
   }, error => console.log(error));
  }

  public backgroundImgUrl(imageUrl: string): SafeStyle {
    return this.sanitizer.bypassSecurityTrustStyle(`linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),url(${imageUrl})`);
  }

}
