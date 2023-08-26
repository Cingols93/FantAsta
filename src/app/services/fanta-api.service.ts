import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Constants } from '../../common/service-constants';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class FantaApiService {
  // constructor(private http: HttpClient, private apiService: ApiService) {}
  // players(team: number, season: number): void {
  //   this.apiService.get('/players', { team, season }).subscribe((res) => {
  //     console.log(res);
  //   });
  // }
}
