import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

// interface UserData {
//   name: string;
//   surname: string;
//   username: string;
//   email: string;
//   password: string;
// }
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent {
  // userData: UserData = {
  //   name: '',
  //   surname: '',
  //   username: '',
  //   email: '',
  //   password: '',
  // };
  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    username: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
  });
  onSubmit() {
    console.log(this.profileForm.value);
  }
}
