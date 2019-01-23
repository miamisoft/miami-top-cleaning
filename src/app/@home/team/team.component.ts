import { Component, OnInit, AfterViewInit } from '@angular/core';
import { AppScripts } from 'src/app/core/app.scripts';



@Component({
  selector: 'app-home-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements AfterViewInit {
  

  constructor() { }

  ngAfterViewInit(): void {
      AppScripts.setupCarousel('.team-owl-carousel');
  }

  

}
