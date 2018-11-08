import {
  Component,
  ContentChildren,
  QueryList,
  AfterContentInit,
} from '@angular/core';
import { TabComponent } from '../tab/tab.component';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['tabs.component.scss'],
})
export class TabsComponent implements AfterContentInit {
  @ContentChildren(TabComponent) tabs: QueryList<TabComponent>;
  public activeTab: TabComponent = null;

  ngAfterContentInit() {
    if (this.tabs) {
      this.selectTab(this.tabs.first);
    }
    this.tabs.changes.subscribe(tabs => {
      if (!tabs.some(tab => tab.active)) {
        this.selectTab(tabs.first);
      }
    });
  }

  selectTab(tab: TabComponent): void {
    this.tabs.toArray().forEach(t => (t.active = false));
    if (tab) {
      tab.active = true;
      this.activeTab = tab;
    }
  }
}
