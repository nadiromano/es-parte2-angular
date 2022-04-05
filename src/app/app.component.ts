import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { switchMap, map } from 'rxjs/operators';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  apiUrl: string = 'https://api.covid19api.com/';

  obj!: {
    name: string[];
    endpoint: string[];
  };
  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    forkJoin({
      name: this.http.get<object>(this.apiUrl).pipe(
        switchMap(async (res) => res),
        map((res) => {
          return Object.keys(res);
        })
      ),
      endpoint: this.http.get<object>(this.apiUrl).pipe(
        switchMap(async (res) => res),
        map((res) => {
          return Object.values(res).map((r) => r.Path);
        })
      ),
    }).subscribe((res) => {
      return (this.obj = {
        name: res.name,
        endpoint: res.endpoint,
      });
    });
  }
}
