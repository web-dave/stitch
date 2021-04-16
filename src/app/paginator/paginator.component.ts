import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'stitch-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss'],
})
export class PaginatorComponent implements OnInit {
  @Input() previous!: string | null;
  @Input() next!: string | null;
  @Input() pages!: number[];
  @Input() page!: number;
  @Output() goto = new EventEmitter<number>();
  constructor() {}

  ngOnInit(): void {}

  setPage(p: number, enaled: boolean | null | string) {
    if (!enaled) {
      return;
    }
    this.goto.emit(p);
  }
}
