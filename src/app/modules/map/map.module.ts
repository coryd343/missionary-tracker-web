import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapRoutingModule } from './map-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MapComponent } from './map/map.component';
import { COMPONENTS } from '.';


@NgModule({
  declarations: [COMPONENTS],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MapRoutingModule
  ]
})
export class MapModule { }
