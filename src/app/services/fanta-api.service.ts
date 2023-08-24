import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Constants } from '../../common/service-constants';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class FantaApiService {
  constructor(private http: HttpClient, private apiService: ApiService) {}

  players(): void {
    let params = {
      team: Constants.SERIE_A_ID,
      season: Constants.YEAR_CURRENT_SEASON,
    };
    
    this.apiService.get('/players', params).subscribe((res) => {
      console.log(res);
    });
  }
}
