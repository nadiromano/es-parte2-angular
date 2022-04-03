import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { Beer } from '../beer.model';
import { BeerService } from '../beer.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css'],
})
export class ShopComponent implements OnInit, OnDestroy {
  constructor(private beerService: BeerService) {}
  beers: Beer[] = [];
  subscription!: Subscription;
  selectedBeer!: Beer;
  selectExist = false;

  ngOnInit(): void {
    this.subscription = this.beerService
      .getAll()
      .subscribe((data) => (this.beers = data));
  }

  onSubmit(f: NgForm) {
    this.selectedBeer = this.beerService.get(+f.value.id);
    if (this.selectedBeer.type === f.value.type) {
      this.selectExist = true;
    } else {
      this.selectExist = false;
    }

    console.log(this.selectedBeer, this.selectExist);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
