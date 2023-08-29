import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent {
  mailIsValid: boolean = true;
  passwordsIsValid: boolean = true;
  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    username: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    confirmPassword: new FormControl(''),
  });
  onSubmit() {
    if (!this.profileForm.value.email?.includes('@')) {
      this.mailIsValid = false;
    } else {
      true;
    }
    if (
      this.profileForm.value.password !== this.profileForm.value.confirmPassword
    ) {
      this.passwordsIsValid = false;
    } else {
      true;
    }

    console.log(this.profileForm);
  }
}
