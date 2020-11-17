import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { UserRoutingModule } from './user-routing.module';
import { COMPONENTS } from '.';


@NgModule({
  declarations: [ COMPONENTS ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    UserRoutingModule
  ]
})
export class UserModule { }
