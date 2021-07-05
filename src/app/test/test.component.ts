import { Component, OnDestroy, OnInit } from '@angular/core';
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

  constructor() {}
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
