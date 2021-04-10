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
    for(let i = 0; i<6; i++) {
      const imageString = `assets/images/clients/${i+1}.png`;
      this.clientsList.push(imageString);
    }
  }

  prepareArray(n: number): any[] {
    console.log(this.clientsList);
    return this.clientsList;
  }
}
