import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'stitch-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListeComponent implements OnChanges {
  @Input() itm!: { index: number; value: number };
  @Output() addone = new EventEmitter<number>();
  constructor(private cdr: ChangeDetectorRef) {
    setTimeout(() => {
      this.add(this.itm.index);
      this.cdr.markForCheck();
    }, 2000);
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  add(i: number) {
    this.addone.emit(i);
  }
}
