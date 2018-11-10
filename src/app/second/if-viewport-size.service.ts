import { Injectable, OnDestroy } from '@angular/core';

import { fromEvent, merge, Observable, Subject } from 'rxjs';
import { filter, map, takeUntil } from 'rxjs/operators';

export enum ViewportSize {
  SMALL = 'small',
  MEDIUM = 'medium',
  LARGE = 'large',
}

@Injectable()
export class IfViewportSizeService implements OnDestroy {
  /** Наблюдатель за размером */
  private _viewportSizeObserver = new Subject<ViewportSize>();
  readonly ViewportSize$ = this._viewportSizeObserver.asObservable();
  private _destroy$ = new Subject<void>();
  private _mqlMap = new Map<ViewportSize, string>();

  constructor() {
    // Есть подозрение, что Вы ожидали решение через NgZone и resize,
    // но как раз предложенное мной решение будет быстрее
    this.init({
      medium: 300,
      large: 500,
    });
    this._subscribeToMediaMatch();
  }

  public init(config: IConfig): void {
    this._mqlMap.set(ViewportSize.SMALL, `(max-width: ${config.medium - 1}px)`);
    this._mqlMap.set(ViewportSize.LARGE, `(min-width: ${config.large}px)`);
    this._mqlMap.set(
      ViewportSize.MEDIUM,
      `(min-width: ${config.medium}px) and (max-width: ${config.large - 1}px)`
    );
  }

  private _sizeFactory(size: ViewportSize): Observable<ViewportSize> {
    return fromEvent(window.matchMedia(this._mqlMap.get(size)), 'change').pipe(
      filter((e: MediaQueryListEvent) => e.matches),
      map(() => size)
    );
  }

  private _subscribeToMediaMatch() {
    const small$ = this._sizeFactory(ViewportSize.SMALL);
    const medium$ = this._sizeFactory(ViewportSize.MEDIUM);
    const large$ = this._sizeFactory(ViewportSize.LARGE);
    merge(small$, medium$, large$)
      .pipe(takeUntil(this._destroy$))
      .subscribe(this._viewportSizeObserver);
  }

  ngOnDestroy(): void {
    this._destroy$.next();
    this._destroy$.complete();
  }
}
