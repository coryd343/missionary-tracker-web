import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import * as Components from '.';

const routes: Routes = [
  {
    path: 'map',
    component: Components.MapComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MapRoutingModule { }
