import { Component, OnInit, Input } from '@angular/core';

export interface BreadcrumbsItem {
  title: string;
  routeUrl: string;
  active: boolean;
}

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent implements OnInit {

  @Input()
  public navItems: BreadcrumbsItem[];

  constructor() { }

  ngOnInit() {
    if(!this.navItems)
      throw 'No Breadcrumb items found';
  }

  public get pageTitle(): string {
    return this.navItems.find(x => x.active).title;
  }

}
