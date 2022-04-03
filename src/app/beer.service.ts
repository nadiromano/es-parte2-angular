import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, Subscription } from 'rxjs';
import { filter, find, tap } from 'rxjs/operators';
import { Beer } from './beer.model';

@Injectable({
  providedIn: 'root',
})
export class BeerService {
  private beers: Beer[] = [
    {
      id: 1,
      type: 'small',
      name: 'birraCane',
      price: 2,
    },
    {
      id: 2,
      type: 'medium',
      name: 'birraGatto',
      price: 5,
    },
    {
      id: 3,
      type: 'medium',
      name: 'birraTopo',
      price: 5,
    },
    {
      id: 4,
      type: 'small',
      name: 'birraScimmia',
      price: 12,
    },
    {
      id: 5,
      type: 'medium',
      name: 'birraAsina',
      price: 44,
    },
    {
      id: 6,
      type: 'small',
      name: 'birraCicogna',
      price: 4,
    },
    {
      id: 7,
      type: 'medium',
      name: 'birraPuma',
      price: 21,
    },
    {
      id: 8,
      type: 'small',
      name: 'birraGeco',
      price: 2,
    },
    {
      id: 9,
      type: 'medium',
      name: 'birraLeone',
      price: 55,
    },
    {
      id: 10,
      type: 'medium',
      name: 'birraDomatore',
      price: 105,
    },
  ];

  private beerSubject = new BehaviorSubject(this.beers);
  public beers$ = this.beerSubject.asObservable();

  getAll(): Observable<Beer[]> {
    return this.beers$;
  }

  get(id: number): any {
    return this.beers.find((beer) => beer.id === id) as Beer;
  }
}
