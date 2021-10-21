import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  model: any = {
    name: null,
    email: null,
    subject: null,
    message: null
  };

  endPointId = environment.baseUrl;
  constructor(
    private profileService: ProfileService,
  ){}

  ngOnInit() {}

  contact() {
    if(!this.isBtnDisabled()) {
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

  isBtnDisabled() {
    return !(this.model.name !== null && this.model.subject !== null && this.model.email !== null);
  }

}
