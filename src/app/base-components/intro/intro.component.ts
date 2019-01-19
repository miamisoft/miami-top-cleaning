import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/core/data.service';

interface IntroData {
    imgUrl: string;
    title: string;
    slogan: string;
    desc: string;
}

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {

  public data: IntroData[] = [];

  constructor(private _dataService: DataService) { }

  ngOnInit() {
    this._dataService.getData('intro').subscribe((res: IntroData[]) => {
       this.data = res;
    }, error => console.log(error));
  }


}
