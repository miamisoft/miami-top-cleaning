import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { AppContext } from 'src/app/core/appcontext.service';

interface ServiceData {
   name: string;
   descUrl: string;
   imgUrl: string;
   category: number[];
}

@Component({
  selector: 'app-home-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  public data: ServiceData[] = [];


  constructor(private _appContext: AppContext, private _httpService: HttpClient) { }

  ngOnInit() {
     this._httpService.get(`${environment.dataBaseUrl}/${this._appContext.currentLan}/services.${this._appContext.currentLan}.json`).subscribe((res: ServiceData[]) => {
        this.data = res;
     }, error => console.log(error));
  }

}
