import { InjectionToken } from '@angular/core';

export const ViewportConfig = new InjectionToken<IConfig>('ViewportConfig');

export interface IConfig {
  medium: number;
  large: number;
}

export enum ViewportSize {
  SMALL = 'small',
  MEDIUM = 'medium',
  LARGE = 'large',
}
