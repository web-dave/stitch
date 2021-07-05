import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { StarwarsService } from './starwars.service';

@Component({
  selector: 'stitch-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  hurz = { name: 'Hurz' };
  constructor(public auth: AuthService, private service: StarwarsService) {}
  ngOnInit(): void {
    this.service.params$$.subscribe((params) => console.log(params));
  }
}
