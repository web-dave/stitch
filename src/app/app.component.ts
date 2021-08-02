import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { StarwarsService } from './starwars.service';

@Component({
  selector: 'stitch-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  hurz = { name: 'Hurz' };
  myId = 0;
  constructor(
    public auth: AuthService,
    private service: StarwarsService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.service.params$$.subscribe((params) => console.log(params));

    setInterval(() => {
      this.myId++;
      this.router.navigate(['test', this.myId]);
    }, 2000);
  }
}
