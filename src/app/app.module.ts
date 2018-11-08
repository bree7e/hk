import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SecondModule } from './second/second.module';
import { ThirdModule } from './third/third.module';
import { FirstModule } from './first/first.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FirstModule,
    SecondModule,
    ThirdModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
