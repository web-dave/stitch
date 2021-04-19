import { Directive, Input, ViewContainerRef } from '@angular/core';
import { IResult } from './starwars.service';

@Directive({
  selector: '[stitchDynDir]',
})
export class DynDirDirective {
  @Input() stitchDynDir!: string;
  @Input() stitchDynDirData!: IResult;
  constructor(public viewRef: ViewContainerRef) {}
}
