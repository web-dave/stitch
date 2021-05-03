import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'stitch-log-in-out-btn',
  templateUrl: './log-in-out-btn.component.html',
  styleUrls: ['./log-in-out-btn.component.scss'],
})
export class LogInOutBtnComponent implements OnInit {
  constructor(
    public auth: AuthService,
    @Inject(DOCUMENT) private doc: Document
  ) {}

  loginWithRedirect() {
    this.auth.loginWithRedirect();
  }
  logout() {
    this.auth.logout({ returnTo: this.doc.location.origin });
  }

  ngOnInit(): void {}
}
