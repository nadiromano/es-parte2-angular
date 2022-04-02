import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-show-counter',
  templateUrl: './show-counter.component.html',
  styleUrls: ['./show-counter.component.css'],
})
export class ShowCounterComponent implements OnInit {
  count$!: Observable<number>;

  constructor(private counter: CounterService) {}

  ngOnInit(): void {
    this.count$ = this.counter.getAll();
  }
}
