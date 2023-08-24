import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Params } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  headers = {
    'X-RapidAPI-Key': '75feb123ddmshd808329cbfb1fb1p123e11jsn68636127a384',
    'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com',
  };

  constructor(private http: HttpClient) {}

  public get<T>(path: string, routerParams?: Params): Observable<T> {
    let queryParams: Params = {};
    if (routerParams) {
      queryParams = this.setParameter(routerParams);
    }
    console.log(queryParams);
    return this.http.get<T>(this.path(path), {
      params: queryParams,
      headers: this.headers,
    });
  }

  private setParameter(routerParams: Params): HttpParams {
    let queryParams = new HttpParams();
    for (const key in routerParams) {
      if (routerParams.hasOwnProperty(key)) {
        queryParams = queryParams.set(key, routerParams[key]);
      }
    }
    return queryParams;
  }

  private path(path: string): string {
    return `${environment.api_url}${path}`;
  }
}
