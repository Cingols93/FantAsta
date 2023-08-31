import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class FantaApiService {
  headerRapidApi = {
    'X-RapidAPI-Key': environment.rapid_api_key,
    'X-RapidAPI-Host': environment.rapid_api_host,
  };

  constructor(private apiService: ApiService) {}
  players(team: number, season: number): void {
    this.apiService
      .get('/players', { team, season }, this.headerRapidApi)
      .subscribe((res) => {
        console.log(res);
      });
  }
}
