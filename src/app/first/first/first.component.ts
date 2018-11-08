import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html'
})
export class FirstComponent implements OnInit {
  public visible = false;

  constructor() { }

  ngOnInit() {
  }

}
