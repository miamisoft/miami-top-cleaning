import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from 'src/app/core/data.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { ServiceData } from 'src/app/models/data.models';



@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.scss']
})
export class QuoteComponent implements OnInit, OnDestroy {

  private paramSubscription: Subscription;

  public services: ServiceData[];
  public zipCodes: number[];
  public selectedServices: number[] = [];

  constructor(private _dataService: DataService,  private activatedRoute: ActivatedRoute,) { }

  ngOnInit() {

    this.paramSubscription = this.activatedRoute.params.subscribe(params => {
        let serviceId = params['serviceid'];
        this.selectedServices.push(parseInt(serviceId));
    });

    this._dataService.geti18nData('services').subscribe((services: ServiceData[]) => {
      this.services = services;
    }, error => console.log(error));

    this._dataService.getData('zipcodes').subscribe((zipcodes: number[]) => {
        this.zipCodes = zipcodes;
    }, error => console.log(error));
  }

  ngOnDestroy() {
    this.paramSubscription.unsubscribe();
  }

  public isServiceSelected(serviceId: number): boolean{
    return this.selectedServices.findIndex(x => x === serviceId) > -1;
  }

  public toogleChanged(serviceId: number){
    let index = this.selectedServices.findIndex(x => x === serviceId);
    if(index > -1)
      this.selectedServices.splice(index, 1);
    else
      this.selectedServices.push(serviceId);
  }

}
