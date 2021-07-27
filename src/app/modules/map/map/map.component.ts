import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import WebMap from "@arcgis/core/WebMap";
import MapView from "@arcgis/core/views/MapView";

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  @ViewChild("mapView", {static: true}) private mapView: ElementRef;
  
  constructor() { }

  ngOnInit(): void {
    this.initializeMap();
  }

  initializeMap() {
    let mapElement = this.mapView.nativeElement;


    const webmap = new WebMap({
      portalItem: {
        id: '488eefb4d4404ad0af74ec551f2f9871' //My web map
        //id: 'aa1d3f80270146208328cf66d022e09c', //Sample webmap
      },
    });

    const view = new MapView({
      map: webmap,
      center: [-118.805, 34.027],
      zoom: 13, // scale: 72223.819286
      container: mapElement,
      constraints: {
        snapToZoom: false
      }
    });
  }

}
