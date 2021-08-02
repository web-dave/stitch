import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject, BehaviorSubject, ReplaySubject } from 'rxjs';
import { delay, map, tap, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'stitch-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
})
export class TestComponent implements OnInit, OnDestroy {
  end$ = new Subject<void>();
  subject$ = new Subject<number>();
  bSubject$ = new BehaviorSubject<number>(0);
  rSubject$ = new ReplaySubject<number>(10);

  paramS: any = null;

  i = 0;
  numArr: any[] = [];

  addone(index: number) {
    // let item = this.numArr[index];
    // let val = item.value + 1;
    // this.numArr[index].value = val;
    let liste = [...this.numArr];
    // let item = liste[index];
    let item = { ...liste[index] };
    item.value++;
    liste[index] = item;
    this.numArr = liste;
  }

  constructor(private route: ActivatedRoute) {
    for (let i = 0; i <= 1000; i++) {
      this.numArr.push({
        index: i,
        value: i,
      });
    }
    this.route.paramMap.subscribe((data) => {
      console.log('stream', data.get('id'));
    });
    this.paramS = this.route.snapshot.paramMap;
    setInterval(() => {
      console.log('SnapShot!!!', this.route.snapshot);
      console.log('SnapShot', this.paramS.get('id'));
      // this.addone(7);
    }, 1500);
  }

  tests$ = this.subject$.pipe(
    map((x) => (x + x) * 2),
    delay(1500),
    takeUntil(this.end$)
  );
  testb$ = this.bSubject$.pipe(
    map((x) => (x + x) * 2),
    tap((data) => console.log('BehaviorSubject', data)),
    delay(1500),
    takeUntil(this.end$)
  );
  testr$ = this.rSubject$.pipe(
    map((x) => (x + x) * 2),

    tap((data) => console.log('ReplaySubject', data)),
    takeUntil(this.end$)
  );
  foo$ = this.testr$.pipe(delay(1500), takeUntil(this.end$));

  ngOnDestroy(): void {
    this.end$.next();
    this.end$.complete();
  }

  ngOnInit(): void {
    for (let i = 0; i < 10; i++) {
      this.callnext(i);
    }
  }

  callnext(numb: number) {
    console.log('call next', numb);
    this.subject$.next(numb);
    this.bSubject$.next(numb);
    this.rSubject$.next(numb);
  }
}
