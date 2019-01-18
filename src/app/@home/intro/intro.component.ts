import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

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
export class IntroComponent implements OnInit {

  public data: IntroData[] = [];

  constructor(private _httpService: HttpClient) { }

  ngOnInit() {
     this._httpService.get(`${environment.dataBaseUrl}/intro.data.json`).subscribe((res: IntroData[]) => {
        this.data = res;
     }, error => console.log(error));
  }

}
