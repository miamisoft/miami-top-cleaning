import { Component, OnInit } from '@angular/core';
import { Event, Router, NavigationEnd, NavigationStart } from '@angular/router';

declare var jQuery: any;

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  public menuIndex = 0;

  constructor(router: Router) {
    router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        setTimeout(() => {
          jQuery('#toTop').click();
        }, 100);
      }
    });

  }

  ngOnInit() {

  }

  selectMenuItem(index: number) {
    this.menuIndex = index;
  }

}
