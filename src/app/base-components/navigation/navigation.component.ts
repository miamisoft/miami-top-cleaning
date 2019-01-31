import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  public menuIndex: number = 1;

  constructor() { }

  ngOnInit() {
  }

  selectMenuItem(index: number){
    this.menuIndex = index;
  }

}
