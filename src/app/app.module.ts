import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AuthModule.forRoot({ ...env.auth }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
