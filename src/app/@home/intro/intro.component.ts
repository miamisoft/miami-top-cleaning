import { Component, OnInit, AfterViewInit } from '@angular/core';
import { DataService } from 'src/app/core/data.service';
import { AppScripts } from 'src/app/core/app.scripts';

interface IntroData {
    imgUrl: string;
    title: string;
    slogan: string;
    desc: string;
}

@Component({
  selector: 'app-home-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements AfterViewInit {
  
  public data: IntroData[] = [];

  constructor(private _dataService: DataService) { }

  ngAfterViewInit(): void {
    this._dataService.getData('intro').subscribe((res: IntroData[]) => {
      this.data = res;
      setTimeout(() => {
        AppScripts.setupFlexSlider();
      });
   }, error => console.log(error));
  }

}
