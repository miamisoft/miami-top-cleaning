import { Component, OnInit, AfterViewInit } from '@angular/core';
import { AppScripts } from 'src/app/core/app.scripts';
import { TeamData } from 'src/app/models/data.models';
import { DataService } from 'src/app/core/data.service';



@Component({
  selector: 'app-home-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit, AfterViewInit {

  public data: TeamData[];

  constructor(private _dataService: DataService) { }

  ngOnInit(): void {
    this._dataService.geti18nData('team').subscribe((res: TeamData[]) => {
      this.data = res;
   }, error => console.log(error));
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      AppScripts.setupCarousel('.team-owl-carousel');
    }, 1000);
  }

  

}
