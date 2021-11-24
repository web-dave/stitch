import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface IResponse {
  count: number;
  next: string;
  previous: string | null;
  results: IResult[];
}

export interface IResult {
  MGLT: string;
  cargo_capacity: string;
  consumables: string;
  cost_in_credits: string;
  created: string;
  crew: string;
  edited: string;
  films: string[];
  hyperdrive_rating: string;
  length: string;
  manufacturer: string;
  max_atmosphering_speed: string;
  model: string;
  name: string;
  passengers: string;
  pilots: string[];
  starship_class: string;
  url: string;
}

@Injectable({
  providedIn: 'root',
})
export class StarwarsService {
  params$$ = new BehaviorSubject({});

  url = 'https://swapi.dev/api/';
  constructor(private http: HttpClient) {}

  getAllStarships(page: number) {
    return this.http.get<IResponse>(this.url + 'starships/?page=' + page);
  }
  getStarships(id: number, format: 'wookiee' | 'json' = 'json') {
    return this.http.get<IResponse>(
      this.url + 'starships/' + id + '?format=' + format
    );
  }
}
