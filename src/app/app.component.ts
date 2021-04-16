import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'stitch-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'stitch';
  foo = 8;
  constructor(private router: Router) {}
}
