import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import * as Components from '.';
//import { COMPONENTS } from './user.module'

const routes: Routes = [
  {
    path: "user",
    component: Components.UserRootComponent,
    children: [
      {
        path: "profile",
        component: Components.ProfileComponent,
        pathMatch: "full"
      }
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
