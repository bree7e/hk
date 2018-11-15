import { Directive, Input, TemplateRef, ViewContainerRef, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { IfViewportSizeService } from './if-viewport-size.service';
import { IfViewportNgZoneSizeService } from './if-viewport-zone-size.service';
import { ViewportSize } from './if-viewport-size.interface';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[ifViewportSize]',
})
export class IfViewportSizeDirective implements OnInit, OnDestroy {
  @Input()
  ifViewportSize: ViewportSize;
  private _subscription: Subscription;

  constructor(
    private _templateRef: TemplateRef<any>,
    private _viewContainer: ViewContainerRef,
    // private _sizeService: IfViewportSizeService,
    private _sizeService: IfViewportNgZoneSizeService,
  ) {}

  ngOnInit(): void {
    this._subscription = this._sizeService.ViewportSize$.subscribe(size => {
      if (this.ifViewportSize === size) {
        this._viewContainer.createEmbeddedView(this._templateRef);
      } else {
        this._viewContainer.clear();
      }
    });
  }

  ngOnDestroy(): void {
    this._subscription.unsubscribe();
  }
}
