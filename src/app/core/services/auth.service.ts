import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { RegistrationModel } from '../models/RegistrationModel';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private apiService: ApiService, private http: HttpClient) {}

  signUp(form: RegistrationModel) {
    return this.http.post(`${environment.backend_url}/auth/signup`, form);
  }
}
