import {
  AfterViewChecked,
  Component,
  ComponentFactoryResolver,
  ComponentRef,
  OnInit,
  TemplateRef,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
import { DynDirDirective } from '../dyn-dir.directive';
import { ShipClassComponent } from '../ship-class/ship-class.component';
import { ShipNameComponent } from '../ship-name/ship-name.component';
import { IResponse, StarwarsService } from '../starwars.service';

@Component({
  selector: 'stitch-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent {
  cellList = ['Name', 'Class'];
  compList = { Name: ShipNameComponent, Class: ShipClassComponent };
  @ViewChildren(DynDirDirective) cells!: DynDirDirective[];
  page = 1;
  data$: Observable<IResponse>;
  loadData$$ = new BehaviorSubject(this.page);

  constructor(
    private service: StarwarsService,
    private router: Router,
    private route: ActivatedRoute,
    private componentFactoryResolver: ComponentFactoryResolver
  ) {
    this.data$ = this.loadData$$.pipe(
      switchMap((i) =>
        this.service.getAllStarships(i).pipe(
          tap(() => {
            setTimeout(() => this.loadComp(), 0);
          })
        )
      )
    );
  }

  loadComp(): void {
    this.cells.forEach((d, i) => {
      let comp: any = ShipNameComponent;
      if (d.stitchDynDir === 'Class') {
        comp = ShipClassComponent;
      }
      const myComponent: ComponentRef<ShipClassComponent> =
        d.viewRef.createComponent(
          this.componentFactoryResolver.resolveComponentFactory(comp)
        );
      myComponent.instance.data = d.stitchDynDirData;
    });
  }

  getTemp(data: TemplateRef<DynDirDirective>, c: string) {
    // console.log(data, c);
  }

  setPage(n: number) {
    this.page = n;
    this.loadData$$.next(this.page);
  }

  getPossiblePages(count: number): number[] {
    return new Array(Math.round(count / 10));
  }
  navigateToDetails(url: string) {
    const id = url.replace('https://swapi.dev/api/starships/', '').split('/');
    this.service.params$$.next({ id: id[0] });
    this.router.navigate([id[0]], { relativeTo: this.route });
  }
}
