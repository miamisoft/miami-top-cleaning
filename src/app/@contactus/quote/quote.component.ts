import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { DataService } from 'src/app/core/data.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { ServiceData } from 'src/app/models/data.models';
import { Contact } from 'src/app/models/contact.model';
import { QuoteService } from './quote.service';
import { ToastrManager } from 'ng6-toastr-notifications';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.scss']
})
export class QuoteComponent implements OnInit, OnDestroy {

  @ViewChild('quoteForm')
  public quoteForm: NgForm;

  private paramSubscription: Subscription;

  public services: ServiceData[];
  public zipCodes: number[];
  public selectedServices: number[];
  public contact: Contact;

  constructor(private _dataService: DataService, 
              private _quoteService: QuoteService, 
              private _activatedRoute: ActivatedRoute,
              private _toast: ToastrManager) { }

  ngOnInit() {
    
    this.initForm();

    this.paramSubscription = this._activatedRoute.params.subscribe(params => {
        let serviceId = params['serviceid'];
        if(serviceId)
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

  private initForm(): void{
    this.contact = {
      fullname: '',
      street: '',
      city: '',
      suite: '',
      email: '',
      servicesDesc: '',
      phone: '',
      zipcode: '',
      message: '',
      date: ''
    };
    this.quoteForm.form.markAsPristine();
    this.quoteForm.form.markAsUntouched();
    this.selectedServices = [];
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
    this.contact.date = new Date().toString();
    this._quoteService.sendInformation(this.contact).subscribe(() => {
      this._toast.successToastr('Message sent successfully!', 'Success!', { position: 'bottom-left', timeOut: 5000 });
      this.initForm();
    }, error => this._toast.errorToastr('An error occurred on our server when trying to send this message. Please try again.', 'Error'));
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
