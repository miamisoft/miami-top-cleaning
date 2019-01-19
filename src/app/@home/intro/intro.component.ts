import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { AppContext } from 'src/app/core/appcontext.service';

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

  constructor(private _appContext: AppContext, private _httpService: HttpClient) { }

  ngOnInit() {
     this._httpService.get(`${environment.dataBaseUrl}/${this._appContext.currentLan}/intro.${this._appContext.currentLan}.json`).subscribe((res: IntroData[]) => {
        this.data = res;
     }, error => console.log(error));
  }

}
