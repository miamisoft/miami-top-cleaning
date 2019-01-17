import { Component, ViewChild, AfterViewInit } from '@angular/core';

declare var google: any;

@Component({
  selector: 'app-home-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements AfterViewInit {
  
  @ViewChild('gmap')
  private mapElement: any;

  private readonly address: string = "10260 SW 37th Ter Miami FL 33165 "

  constructor() { }

  ngAfterViewInit(): void {
    this.render();
  }

  private render() {
    let geocoder = new google.maps.Geocoder();
    geocoder.geocode({ 'address': this.address }, (results, status) => {

      if (status.toString() === 'OK') {
          let location = results[0].geometry.location;
          let position = { lat: location.lat(), lng: location.lng() };

          let map = new google.maps.Map(this.mapElement.nativeElement, {
            center: position,
            scrollwheel: false,
            zoom: 18
          });

          new google.maps.Marker({
            map: map,
            position: position,
            title: 'Miami Top Cleaning'
          });

      } else {
        console.error('Geocode was not successful for the following reason: ' + status);
      }
  });
}

}
