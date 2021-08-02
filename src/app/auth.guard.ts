import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate, Resolve<number> {
  constructor(public auth: AuthService) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): number | Observable<number> | Promise<number> {
    return of(99999).pipe(delay(1500));
  }
  canActivate(): Observable<boolean> {
    return this.auth.isAuthenticated$;
  }
}
