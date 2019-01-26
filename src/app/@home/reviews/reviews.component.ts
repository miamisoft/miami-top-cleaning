import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { DataService } from 'src/app/core/data.service';
import { environment } from 'src/environments/environment';
import { ReviewsData } from 'src/app/models/data.models';

@Component({
  selector: 'app-home-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss']
})
export class ReviewsComponent  implements OnInit {

  public reviews: ReviewsData;
  public env: any;
  
  constructor(private _dataService: DataService, private changeDetector: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.env = environment;
    this._dataService.getData('reviews').subscribe((res: ReviewsData) => {
      this.reviews = res;
   }, error => console.log(error));
  }

}
