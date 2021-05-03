import { Component, Input, OnInit } from '@angular/core';
import { IResult } from '../starwars.service';

@Component({
  selector: 'stitch-ship-class',
  templateUrl: './ship-class.component.html',
  styleUrls: ['./ship-class.component.scss'],
})
export class ShipClassComponent implements OnInit {
  @Input() data!: IResult;
  constructor() {}

  ngOnInit(): void {}
}
