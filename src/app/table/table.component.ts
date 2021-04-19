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
export class TableComponent implements AfterViewChecked {
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
      switchMap((i) => this.service.getAllStarships(i).pipe(tap(console.log)))
    );
  }

  ngAfterViewChecked(): void {
    console.log('Name ===>', this.cells);
    this.cells.forEach((d, i) => {
      console.log(d);
      let comp: any = ShipNameComponent;
      if (d.stitchDynDir === 'Class') {
        comp = ShipClassComponent;
      }
      const myComponent: ComponentRef<ShipClassComponent> = d.viewRef.createComponent(
        this.componentFactoryResolver.resolveComponentFactory(comp)
      );
      myComponent.instance.data = d.stitchDynDirData;
    });
    // const comp = this.cells.viewRef.createComponent(
    //   this.componentFactoryResolver.resolveComponentFactory(ShipClassComponent)
    // );

    // comp.instance.data =
    // this.cells[0].viewRef;
  }

  getTemp(data: TemplateRef<DynDirDirective>, c: string) {
    console.log(data, c);
  }

  setPage(n: number) {
    this.page = n;
    this.loadData$$.next(this.page);
  }

  getPossiblePages(count: number): number[] {
    return new Array(Math.round(count / 10));
  }
  navigateToDetails(url: string) {
    const id = url.replace('http://swapi.dev/api/starships/', '').split('/');
    this.router.navigate([id[0]], { relativeTo: this.route });
  }
}
