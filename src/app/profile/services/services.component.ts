import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  constructor() { }
  services: any;
  ngOnInit() {
    this.services = [
      {
        image: 'assets/images/services-image.jpeg',
        title: 'Business Services',
        description: 'The tiny ship today stiller The tiny ship today stiller',
      },
      {
        image: 'assets/images/services-image.jpeg',
        title: 'Business Services',
        description: 'The tiny ship today stiller The tiny ship today stiller',
      },
      {
        image: 'assets/images/services-image.jpeg',
        title: 'Business Services',
        description: 'The tiny ship today stiller The tiny ship today stiller',
      },
      {
        image: 'assets/images/services-image.jpeg',
        title: 'Business Services',
        description: 'The tiny ship today stiller The tiny ship today stiller',
      },
      {
        image: 'assets/images/services-image.jpeg',
        title: 'Business Services',
        description: 'The tiny ship today stiller The tiny ship today stiller',
      }
    ];
  }

}
