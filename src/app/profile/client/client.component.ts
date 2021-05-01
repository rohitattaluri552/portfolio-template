import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {

  constructor() { }

  clientsList: any = [];
  ngOnInit() {
    for(let i = 1; i<=7; i++) {
      const imageString = `assets/images/clients/${i}.png`;
      this.clientsList.push(imageString);
    }
  }
}
