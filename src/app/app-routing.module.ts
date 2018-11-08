import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FirstComponent } from './first/first/first.component';
import { SecondComponent } from './second/second/second.component';
import { ThirdComponent } from './third/third/third.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'one' },
  { path: 'one', component: FirstComponent },
  { path: 'two', component: SecondComponent },
  { path: 'three', component: ThirdComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
