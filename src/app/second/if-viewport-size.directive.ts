import { Directive, Input } from '@angular/core';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[ifViewportSize]'
})
export class IfViewportSizeDirective {
  @Input() ifViewportSize: string;

  constructor() { }
}
