import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-edit-counter',
  templateUrl: './edit-counter.component.html',
  styleUrls: ['./edit-counter.component.css'],
})
export class EditCounterComponent implements OnInit {
  constructor(private counter: CounterService) {}

  val!: number;
  addNumber(form: NgForm) {
    this.val = form.value.inputNumber;
    this.counter.add(this.val);
  }

  minusNumber(form: NgForm) {
    this.val = form.value.inputNumber;
    this.counter.remove(this.val);
  }

  ngOnInit(): void {}
}
