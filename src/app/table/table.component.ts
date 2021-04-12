import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { IResponse, StarwarsService } from '../starwars.service';

@Component({
  selector: 'stitch-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  page = 1;
  data$: Observable<IResponse>;
  loadData$$ = new BehaviorSubject(this.page);

  constructor(
    private service: StarwarsService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.data$ = this.loadData$$.pipe(
      switchMap((i) => this.service.getAllStarships(i))
    );
  }

  ngOnInit(): void {}

  setPage(n: number, enaled: boolean | null | string) {
    if (!enaled) {
      return;
    }
    this.page = n;
    this.loadData$$.next(this.page);
  }

  getPossiblePages(count: number): number[] {
    return new Array(Math.round(count / 10));
  }
  navigateToDetails(url: string) {
    const id = url.replace('http://swapi.dev/api/starships/', '').split('/');
    this.router.navigate([id[0]], { relativeTo: this.route });
  }
}
