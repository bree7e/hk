import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FirstComponent } from './first/first.component';
import {
  TabTitleDirective,
  TabContentDirective,
  TabComponent,
} from './tab/tab.component';
import { TabsComponent } from './tabs/tabs.component';

@NgModule({
  declarations: [
    FirstComponent,
    TabTitleDirective,
    TabContentDirective,
    TabComponent,
    TabsComponent,
  ],
  imports: [CommonModule],
  exports: [
    TabTitleDirective,
    TabContentDirective,
    TabComponent,
    TabsComponent,
  ],
})
export class FirstModule {}
