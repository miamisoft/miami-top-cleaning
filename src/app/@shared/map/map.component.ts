import { Component, ViewChild, AfterViewInit } from '@angular/core';

declare var google: any;

@Component({
  selector: 'app-map',
  template: `<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d28749.338326394834!2d-80.312378!3d25.748514!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x701da3604f8bc3c9!2sMiami+Top+Cleaning+Service!5e0!3m2!1sen!2sus!4v1548219469621" width="100%" height="250" frameborder="0" style="border:0" allowfullscreen></iframe>`,
  styleUrls: ['./map.component.scss']
})
export class MapComponent  {

  constructor() { }
  
}
