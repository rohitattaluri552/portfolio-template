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
        image: 'assets/images/services/data-strategy.jpeg',
        title: 'Data Strategy',
        description: 'We’ll work with you to seamlessly move your data to the Cloud using a single interface with central governance and control.',
      },
      {
        image: 'assets/images/services/open-source.jpeg',
        title: 'Open-source technologies',
        description: 'Open source software is code that is designed to be publicly accessible—anyone can see, modify, and distribute the code as they see fit. Open source has become a movement and a way of working that reaches beyond software production.',
      },
      {
        image: 'assets/images/services/cloud-based.jpeg',
        title: 'Cloud-based development',
        description: 'Cloud platform refers to the operating system and hardware of a server in an Internet-based data center. It allows software and hardware products to co-exist remotely and at scale. The enterprises dont have to set up and own data centers or computing infrastructure',
      },
      {
        image: 'assets/images/services/end-to-end.png',
        title: 'End-to-end integration',
        description: 'Our Integrations Assurance and Integrations Promise give you the  resources to monitor and troubleshoot existing integrations while also providing unlimited integration break-fix and integration warranties.',
      },
      {
        image: 'assets/images/services/network-security.jpeg',
        title: 'Networks and systems security',
        description: 'Within this service, we provide comprehensive support of wired and wireless networks, guaranteeing the continuous performance of network infrastructure for both small and large companies.',
      },
      {
        image: 'assets/images/services/erp-maintenance.jpeg',
        title: 'ERP Development, Upgrade & Maintainence',
        description: 'We offer tailored solutions to address your most significant finance and HR challenges. A relationship with us simplifies the Workday AMS experience.',
      },
    ];
  }

}
