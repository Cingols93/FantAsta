import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent {
  mailIsValid: boolean = false;
  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    username: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
  });
  onSubmit() {
    if (!this.profileForm.value.email?.includes('@')) {
      this.mailIsValid = true;
    } else {
      false;
    }

    console.log(this.profileForm);
  }
}
