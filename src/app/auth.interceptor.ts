import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { iif, NEVER, Observable } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(public auth: AuthService) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return this.auth.isAuthenticated$.pipe(
      switchMap(
        (autenticated) => {
          if (autenticated) {
            return next.handle(req.clone());
          } else {
            return NEVER;
          }
        }
        // autenticated  =>(autenticated ? next.handle(req.clone()) : NEVER)
      )
    );
  }
}
