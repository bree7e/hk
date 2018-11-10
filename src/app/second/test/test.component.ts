import { Component, OnInit } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'test-component',
  template: `<p><ng-content></ng-content></p>`
})
export class TestComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
