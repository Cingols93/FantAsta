import { Component } from '@angular/core';

interface UserData {
  name: string;
  surname: string;
  username: string;
  email: string;
  password: string;
}
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent {
  userData: UserData = {
    name: '',
    surname: '',
    username: '',
    email: '',
    password: '',
  };
  submitForm() {
    console.log(this.userData);
  }
}
