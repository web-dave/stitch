import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NEVER, Observable } from 'rxjs';
import { IResponse, StarwarsService } from '../starwars.service';

@Component({
  selector: 'stitch-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  ship$: Observable<IResponse> = NEVER;
  constructor(
    private route: ActivatedRoute,
    private service: StarwarsService
  ) {}

  ngOnInit(): void {
    this.ship$ = this.service.getStarships(this.route.snapshot.params.id);
  }
}
