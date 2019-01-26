import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.scss']
})
export class QuoteComponent implements OnInit {

  public services: string[];

  constructor() { }

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
  }

}
