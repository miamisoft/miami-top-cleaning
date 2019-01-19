import { Component, OnInit } from '@angular/core';
import { DataService } from '../core/data.service';

interface TeamData{
  firstName: string;
  lastName: string;
  title: string;
  jobDesc: string;
  photoUrl: string;
}

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {

  public data: TeamData[] = [];

  constructor(private _dataService: DataService) { }

  ngOnInit() {
    this._dataService.getData('team').subscribe((res: TeamData[]) => {
       this.data = res;
    }, error => console.log(error));
  }

}
