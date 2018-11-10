import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecondComponent } from './second/second.component';
import { TestComponent } from './test/test.component';
import { IfViewportSizeDirective } from './if-viewport-size.directive';
import { IfViewportSizeService } from './if-viewport-size.service';

@NgModule({
  declarations: [SecondComponent, TestComponent, IfViewportSizeDirective],
  imports: [
    CommonModule
  ],
   providers: [IfViewportSizeService]
})
export class SecondModule { }
