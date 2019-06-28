import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss'],
  styles: ['agm-map { height: 400px; /* height is required */ width: 100%; }'],
  template: `
    <agm-map [latitude]='latitude' [longitude]='longitude' 
      [mapTypeId]='mapType' [zoom]="16" [disableDefaultUI]="disableDefaultUI">
    </agm-map>
  `
})
export class MapsComponent implements OnInit {

@Input() latitude: any;
@Input() longitude: any;

  latitude = -33.432339;
  longitude = -70.6335762;
  mapType = 'terrain';
  disableDefaultUI = true;

  constructor() { }

  ngOnInit() {
  }

}
