import {
  AfterViewChecked,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
} from '@angular/core';

@Component({
  selector: 'stitch-ehcaihbc',
  templateUrl: './ehcaihbc.component.html',
  styleUrls: ['./ehcaihbc.component.scss'],
})
export class EhcaihbcComponent implements AfterViewChecked {
  @Input() foo = { name: 'foo' };
  @Output() pong = new EventEmitter<string>();
  constructor(private cdr: ChangeDetectorRef) {}
  ngAfterViewChecked(): void {
    this.pong.emit('pong');
    this.cdr.detectChanges();
  }
}
