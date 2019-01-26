import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/core/data.service';
import { ServiceData } from 'src/app/models/data.models';

@Component({
  selector: 'app-home-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  public data: ServiceData[] = [];

  constructor(private _dataService: DataService) { }

  ngOnInit() {
    this._dataService.geti18nData('services').subscribe((res: ServiceData[]) => {
       this.data = res;
    }, error => console.log(error));
  }

}
