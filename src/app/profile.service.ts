import { Injectable } from '@angular/core';
import { UserProfile } from './user-profile';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor() { }

  userProfile: UserProfile = {
    name: "Test",
    contact: "test@test.test",
    bio: "This is just a test"
  }

  getUserProfile(): Observable <UserProfile>{

    const profile = of(this.userProfile)
    return profile;
  }

  //setUserProfile()
}
