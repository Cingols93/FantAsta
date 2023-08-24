import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Constants } from '../constants';

@Injectable({
  providedIn: 'root',
})

export class FantaApiService {
  api: string = `https://api-football-v1.p.rapidapi.com/v3`;

  constructor(private http: HttpClient) {}

  players(): void {
    const options = {
      headers: {
        'X-RapidAPI-Key': '75feb123ddmshd808329cbfb1fb1p123e11jsn68636127a384',
        'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
      }
    };

    this.http.get<any>(`${this.api}/players?league=${Constants.SERIE_A_ID}&season=${Constants.YEAR_CURRENT_SEASON}&search=Immobile`, options).subscribe(res =>{
      console.log(res);
    });

  }
}
