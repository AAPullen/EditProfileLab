import { Component } from '@angular/core';
import { ProfileService } from '../profile.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserProfile } from '../user-profile';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent {
  userForm: any;

  constructor(private profileService: ProfileService, private formBuilder: FormBuilder) {
    this.profileForm = this.formBuilder.group({
      name: [''],
      contact: [''],
      bio: [''],
      image: ['']
    });
  }

  profileForm: FormGroup;

  onSubmit() {
    if(this.profileForm.valid){

      const newProfile: UserProfile = this.profileForm.value;

      this.profileService.userProfile = newProfile

      this.profileForm.reset();
    }
  }

}
