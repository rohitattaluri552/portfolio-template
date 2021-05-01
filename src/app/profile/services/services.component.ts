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
        title: 'Java-based frameworks',
        description: 'The tiny ship today stiller The tiny ship today stiller',
      },
      {
        image: 'assets/images/services-image.jpeg',
        title: 'Open-source technologies',
        description: 'The tiny ship today stiller The tiny ship today stiller',
      },
      {
        image: 'assets/images/services-image.jpeg',
        title: 'Cloud-based development',
        description: 'The tiny ship today stiller The tiny ship today stiller',
      },
      {
        image: 'assets/images/services-image.jpeg',
        title: 'End-to-end integration',
        description: 'The tiny ship today stiller The tiny ship today stiller',
      },
      {
        image: 'assets/images/services-image.jpeg',
        title: 'Networks and systems security',
        description: 'The tiny ship today stiller The tiny ship today stiller',
      },
      {
        image: 'assets/images/services-image.jpeg',
        title: 'ERP Development, Upgrade & Maintainence',
        description: 'The tiny ship today stiller The tiny ship today stiller',
      },
    ];
  }

}
