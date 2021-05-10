import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'stitch-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss'],
})
export class TopNavComponent implements OnInit {
  responsive = false;
  constructor() {}

  ngOnInit(): void {}
}
