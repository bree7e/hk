import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecondComponent } from './second/second.component';
import { TestComponent } from './test/test.component';
import { IfViewportSizeDirective } from './if-viewport-size.directive';
import { IfViewportSizeService, ViewportConfig } from './if-viewport-size.service';

@NgModule({
  declarations: [SecondComponent, TestComponent, IfViewportSizeDirective],
  imports: [
    CommonModule
  ]
})
export class SecondModule {
  static forRoot(config: IConfig): ModuleWithProviders {
    return {
      ngModule: SecondModule,
      providers: [
        IfViewportSizeService,
        {
          provide: ViewportConfig,
          useValue: config
        }
      ]
    };
  }
}
