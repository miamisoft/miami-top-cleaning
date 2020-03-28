import { Component, OnInit, OnDestroy } from '@angular/core';

declare const $: any;

@Component({
  selector: 'app-desinfecting',
  templateUrl: './desinfecting.component.html',
  styleUrls: ['./desinfecting.component.scss']
})
export class DesinfectingComponent implements OnInit, OnDestroy {

  constructor() { }

  ngOnInit() {
    $('.covid19').hide();
  }

  ngOnDestroy(): void {
    $('.covid19').show();
  }

}
