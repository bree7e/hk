import { Injectable, OnDestroy, Inject, NgZone } from '@angular/core';

import { fromEvent, Subject, BehaviorSubject } from 'rxjs';
import { takeUntil, auditTime, distinctUntilChanged } from 'rxjs/operators';

import { ViewportSize, ViewportConfig } from './if-viewport-size.interface';

@Injectable()
export class IfViewportNgZoneSizeService implements OnDestroy {
  private _viewportSizeObserver = new BehaviorSubject<ViewportSize>(null);
  /** Поток текущего размера */
  readonly ViewportSize$ = this._viewportSizeObserver
    .asObservable()
    .pipe(distinctUntilChanged());
  private _destroy$ = new Subject<void>();

  private _updateViewportSize() {
    const width = window.innerWidth;
    let viewportSize = ViewportSize.MEDIUM;
    if (width < this.config.medium) {
      viewportSize = ViewportSize.SMALL;
    }
    if (width >= this.config.large) {
      viewportSize = ViewportSize.LARGE;
    }
    this._viewportSizeObserver.next(viewportSize);
  }

  constructor(@Inject(ViewportConfig) private config, ngZone: NgZone) {
    ngZone.runOutsideAngular(() => {
      fromEvent(window, 'resize')
        .pipe(
          auditTime(20),
          takeUntil(this._destroy$)
        )
        .subscribe(() => this._updateViewportSize());
    });
    this._updateViewportSize();
  }

  ngOnDestroy(): void {
    this._destroy$.next();
    this._destroy$.complete();
  }
}
