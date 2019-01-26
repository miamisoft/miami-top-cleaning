import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/core/data.service';



@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.scss']
})
export class QuoteComponent implements OnInit {

  public services: string[];
  public zipCodes: number[];

  constructor(private _dataService: DataService) { }

  ngOnInit() {

    this.services = [
      'Office Cleaning',
      'Floor Cleaning',
      'Pressure Cleaning',
      'High Level Dust Removal',
      'Janitorial Services',
      'Post Construction Cleaning',

      'House Cleaning',
      'Appartment Cleaning',
      'Move In/Out Cleaning',
      'Deep Cleaning',

      'Windows Cleaning',
      'High Rise Window Cleaning'
    ];

    this._dataService.getData('zipcodes').subscribe((zipcodes: number[]) => {
        this.zipCodes = zipcodes;
    }, error => console.log(error));
  }

}
