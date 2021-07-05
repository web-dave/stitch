import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { DetailsComponent } from './details/details.component';
import { PaginatorComponent } from './paginator/paginator.component';
import { ShipNameComponent } from './ship-name/ship-name.component';
import { ShipClassComponent } from './ship-class/ship-class.component';
import { DynDirDirective } from './dyn-dir.directive';
import { LoadingComponent } from './loading/loading.component';
import { LogInOutBtnComponent } from './log-in-out-btn/log-in-out-btn.component';
import { AuthModule } from '@auth0/auth0-angular';
import { environment as env } from '../environments/environment';
import { TopNavComponent } from './top-nav/top-nav.component';
import { HomeComponent } from './home/home.component';
import { AuthInterceptor } from './auth.interceptor';
import { EhcaihbcComponent } from './ehcaihbc/ehcaihbc.component';
import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    DetailsComponent,
    PaginatorComponent,
    ShipNameComponent,
    ShipClassComponent,
    DynDirDirective,
    LoadingComponent,
    LogInOutBtnComponent,
    TopNavComponent,
    HomeComponent,
    EhcaihbcComponent,
    TestComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AuthModule.forRoot({ ...env.auth }),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
