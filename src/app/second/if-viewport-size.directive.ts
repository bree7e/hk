import { Directive, Input, TemplateRef, ViewContainerRef, OnInit } from '@angular/core';
import { ViewportSize, IfViewportSizeService } from './if-viewport-size.service';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[ifViewportSize]',
})
export class IfViewportSizeDirective implements OnInit {
  constructor(
    private _templateRef: TemplateRef<any>,
    private _viewContainer: ViewContainerRef,
    private _sizeService: IfViewportSizeService,
  ) {}

  @Input()
  ifViewportSize: ViewportSize;

  ngOnInit(): void {
    this._sizeService.ViewportSize$.subscribe(size => {
      if (this.ifViewportSize === size) {
        this._viewContainer.createEmbeddedView(this._templateRef);
      } else {
        this._viewContainer.clear();
      }
    });
  }
}
