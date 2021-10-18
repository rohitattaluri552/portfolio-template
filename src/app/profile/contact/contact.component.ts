import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  model: any = {};

  constructor(
    private profileService: ProfileService,
  ){}

  ngOnInit() {}

  contact() {
    this.profileService.contactus(this.model).subscribe(data => {
      if (data.status) {
        // this.snotify.success(data.message, 'Success', this.snotifyConfig);
      } else {
        // this.snotify.warning(data.message, 'Warning', this.snotifyConfig);
      }
    }, err => {
      // this.snotify.error('Something went wrong. Try again later.', 'Error', this.snotifyConfig);
    });
  }

}
