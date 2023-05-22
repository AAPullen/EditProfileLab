import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';
import { UserProfile } from '../user-profile';

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.css']
})
export class ViewProfileComponent implements OnInit {

  constructor(private profileService: ProfileService) {}

  profile: UserProfile = {
    name: "",
    contact: "",
    bio: ""
  }

  ngOnInit(): void {
    this.viewProfile();
  }

  viewProfile(){
    this.profileService.getUserProfile().subscribe(

      result => {
        this.profile = result
      }

    )
  }

}
