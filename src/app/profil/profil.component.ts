import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { NEVER, Observable } from 'rxjs';

@Component({
  selector: 'stitch-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss'],
})
export class ProfilComponent implements OnInit {
  user$: Observable<any> = NEVER;
  constructor(private auth: AuthService) {}

  ngOnInit(): void {
    this.user$ = this.auth.user$;
    this.user$.subscribe(console.log);
    this.auth.getAccessTokenSilently().subscribe(console.log);
  }
}
