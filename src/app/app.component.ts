import { Component, OnInit } from '@angular/core';
import { Comic } from './model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  data!: Comic;

  like: Comic[] = [];
  dislike: Comic[] = [];

  saveLike(data: Comic) {
    return this.like?.push(data);
  }

  moveToDislike() {
    let elem = this.like.pop();
    this.dislike.push(elem as unknown as Comic);
  }

  moveToLike() {
    let elem = this.dislike.pop();
    this.like.push(elem as Comic);
  }

  saveDisLike(data: Comic) {
    return this.dislike?.push(data);
  }

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    setInterval(() => {
      this.http
        .get<any>('https://v2.jokeapi.dev/joke/dark')
        .subscribe((res) => {
          this.data = {
            set: res.setup,
            dev: res.delivery,
          };
        });
    }, 5000);
  }
}
