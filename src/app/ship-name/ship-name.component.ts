import { Component, Input, OnInit } from '@angular/core';
import { IResult } from '../starwars.service';

@Component({
  selector: 'stitch-ship-name',
  templateUrl: './ship-name.component.html',
  styleUrls: ['./ship-name.component.scss'],
})
export class ShipNameComponent implements OnInit {
  @Input() data!: IResult;
  constructor() {}

  ngOnInit(): void {}
}
