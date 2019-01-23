import { Component, OnInit, ChangeDetectorRef, AfterViewInit, ChangeDetectionStrategy } from '@angular/core';
import { DataService } from 'src/app/core/data.service';

interface ReviewsData{
  yelpCodeSnippet: string;
  facebookCodeSnippet: string;
}

@Component({
  selector: 'app-home-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss']
})
export class ReviewsComponent  implements OnInit {

  public reviews: ReviewsData;
  
  constructor(private _dataService: DataService, private changeDetector: ChangeDetectorRef) { }

  ngOnInit(): void {
    this._dataService.getData('reviews').subscribe((res: ReviewsData) => {
      this.reviews = res;
   }, error => console.log(error));
  }

}
