import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      nome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  enviarFormulario() {
    console.log(this.form, 'non valido');
    if (this.form.valid) {
      console.log(this.form, 'valido');
      // Aquí puedes enviar los datos del formulario a través de un servicio o realizar otras acciones.
    }
  }
}
