import { NgModule, ModuleWithProviders, InjectionToken } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecondComponent } from './second/second.component';
import { TestComponent } from './test/test.component';
import { IfViewportSizeDirective } from './if-viewport-size.directive';
import { IfViewportSizeService } from './if-viewport-size.service';
import { IfViewportNgZoneSizeService } from './if-viewport-zone-size.service';
import { IConfig, ViewportConfig } from './if-viewport-size.interface';

@NgModule({
  declarations: [SecondComponent, TestComponent, IfViewportSizeDirective],
  imports: [
    CommonModule
  ],
  exports: [ TestComponent, IfViewportSizeDirective ]
})
export class SecondModule {
  static forRoot(config: IConfig): ModuleWithProviders {
    return {
      ngModule: SecondModule,
      providers: [
        IfViewportSizeService,
        IfViewportNgZoneSizeService,
        {
          provide: ViewportConfig,
          useValue: config
        }
      ]
    };
  }
}
