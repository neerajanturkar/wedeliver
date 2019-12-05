/// <reference types="@types/googlemaps" />

import { Component, OnInit,ViewChild } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { MapService } from '../map.service';
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  @ViewChild('gmap') gmapElement: any;
  map: google.maps.Map;
  from: any;
  to: any;
  bounds: any;
  marker_a: any;
  marker_b: any;
  constructor(private httpClient: HttpClient, private mapService: MapService) { 
    this.bounds = new google.maps.LatLngBounds();
  }

  ngOnInit() {
    var mapProp = {
      center: new google.maps.LatLng(49.398, 8.6724),
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
  }
  fromChanged(){
    if(this.marker_a!==undefined)
        this.marker_a.setMap(null);
    this.mapService.getGeoCodingFromAddress(this.from).then(response=> {
        this.from = response.body['results'][0]['formatted_address'];
        this.addMarker(response.body['results'][0]['geometry']['location']['lat'], response.body['results'][0]['geometry']['location']['lng'],'A',this.marker_a);
      }
    );
    

  }

  toChanged(){
    if(this.marker_b!==undefined)
      this.marker_b.setMap(null);
    this.mapService.getGeoCodingFromAddress(this.to).then(response=> {
      
      this.to = response.body['results'][0]['formatted_address'];
      this.addMarker(response.body['results'][0]['geometry']['location']['lat'], response.body['results'][0]['geometry']['location']['lng'],'B',this.marker_b);

    }
  );
  }
  addMarker(latitude:any, longitude:any, label:any, marker:any){
    
    var position = {lat:latitude, lng:longitude};
     marker = new google.maps.Marker({
      position: position,
      map: this.map,
      title: 'markers',
      label: label
    });
    if(label==='A'){
      this.marker_a = marker;
    }else{
      this.marker_b = marker;
    }
    marker.setMap(this.map);
    this.bounds.extend(position)
    this.map.fitBounds(this.bounds);
    
  }
}
