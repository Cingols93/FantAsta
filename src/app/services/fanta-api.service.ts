import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Constants } from '../../common/service-constants';

@Injectable({
  providedIn: 'root',
})
export class FantaApiService {
  constructor(private http: HttpClient) {}

  players(): void {
    this.http
      .get<any>(
        `${Constants.API_ENDPOINT}/players?league=${Constants.SERIE_A_ID}&season=${Constants.YEAR_CURRENT_SEASON}&search=Immobile`,
        Constants.OPTIONS
      )
      .subscribe((res) => {
        console.log(res);
      });
  }
}
