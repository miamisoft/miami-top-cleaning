import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/core/data.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { ServiceData } from 'src/app/models/data.models';



@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.scss']
})
export class QuoteComponent implements OnInit {

  private paramSubscription: Subscription;

  public services: ServiceData[];
  public zipCodes: number[];

  constructor(private _dataService: DataService,  private activatedRoute: ActivatedRoute,) { }

  ngOnInit() {

    this.paramSubscription = this.activatedRoute.params.subscribe(params => {
        let serviceId = params['serviceid'];
    });

    this._dataService.geti18nData('services').subscribe((services: ServiceData[]) => {
      this.services = services;
    }, error => console.log(error));

    this._dataService.getData('zipcodes').subscribe((zipcodes: number[]) => {
        this.zipCodes = zipcodes;
    }, error => console.log(error));
  }

}
