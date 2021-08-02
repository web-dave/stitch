import { NgModule } from '@angular/core';
import { RouterModule, Routes, UrlSegment } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { DetailsComponent } from './details/details.component';
import { HomeComponent } from './home/home.component';
import { TableComponent } from './table/table.component';
import { TestComponent } from './test/test.component';
const matcher = (url: UrlSegment[]) => {
  console.log(url);
  return url.length === 1 && url[0].path === 'ships'
    ? {
        consumed: url,
        posParams: {
          id: new UrlSegment(url[0].path, {}),
        },
      }
    : null;
};

const routes: Routes = [
  {
    path: 'test',
    component: TestComponent,
  },
  {
    path: 'test/:id',
    component: TestComponent,
    resolve: [AuthGuard],
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    matcher: matcher,
    component: TableComponent,
    canActivate: [AuthGuard],
    children: [],
  },
  {
    path: 'ships',
    component: TableComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'ships/:id',
    component: DetailsComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
