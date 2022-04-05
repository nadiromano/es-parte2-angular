import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  data: any = [];
  constructor(private httpClient: HttpClient) {}

  getAll() {
    return this.httpClient
      .get('https://api.covid19api.com/')
      .pipe(tap((data) => console.log(`get all eseguito ${data}`)));
  }
}
