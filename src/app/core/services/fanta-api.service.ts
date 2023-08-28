import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class FantaApiService {
  constructor(private apiService: ApiService) {}
  players(team: number, season: number): void {
    this.apiService.get('/players', { team, season }).subscribe((res) => {
      console.log(res);
    });
  }
}
