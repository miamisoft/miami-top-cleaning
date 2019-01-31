import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from 'src/app/core/data.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { ServiceData } from 'src/app/models/data.models';
import { Contact } from 'src/app/models/contact.model';
import { QuoteService } from './quote.service';


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
  public contact: Contact;

  constructor(private _dataService: DataService, 
              private _quoteService: QuoteService, 
              private activatedRoute: ActivatedRoute,) { }

  ngOnInit() {

    this.contact = {
      fullname: '',
      street: '',
      city: '',
      suite: '',
      email: '',
      servicesDesc: '',
      phone: '',
      zipcode: '',
      date: new Date().toString()
    };

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
    if(serviceId){
      let index = this.selectedServices.findIndex(x => x === serviceId);
      if(index > -1)
        this.selectedServices.splice(index, 1);
      else
        this.selectedServices.push(serviceId);
    }
  }

  public sendMessageClick(): void {
    this.contact.servicesDesc = this.serviceDesc;
    this.contact
    this._quoteService.sendInformation(this.contact).subscribe(() => {
      alert("Sent");
    }, error => console.log(error));
  }

  private get serviceDesc(): string {
    let desc = '';
    for (const selectedId of this.selectedServices){
      if(selectedId)
        desc += this.services.find(x => x.id === selectedId).name + ',';
    }
    
    return desc;
  }

 

}
