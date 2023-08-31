import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { RegistrationModel } from '../../models/RegistrationModel';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent {
  showPassword: boolean = false;
  form: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  submit(form: RegistrationModel) {
    console.log('not valid');

    if (this.form.valid) {
      this.authService.signUp(form).subscribe((res) => {
        console.log('QUI', res);
      });
      console.log(this.form.value, 'valid');
    }
  }
}
