import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  public phoneNumber: string = 'tel:+17864443947';

  @Input()
  public bgColorClass: string;

  constructor() { }

  ngOnInit() {
  }

}
