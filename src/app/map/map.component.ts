/// <reference types="@types/googlemaps" />

import { Component, OnInit,ViewChild, Input , NgZone} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { MapService } from '../map.service';
import { LoadingService } from "../loading.service";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  @ViewChild('gmap') gmapElement: any;
  @Input() label: string;
  @Input() value: string;

  map: google.maps.Map;
  from: any;
  to: any;
  bounds: any;
  marker_a: any;
  marker_b: any;
  distance: any;
  source_lat: any;
  source_lng: any;
  dest_lat: any;
  dest_lng: any;
  constructor(private httpClient: HttpClient, 
              private mapService: MapService, 
              private ngZone: NgZone,  
              private loadingService: LoadingService,
              private route: ActivatedRoute,
              private router: Router ) { 
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
        this.source_lat = response.body['results'][0]['geometry']['location']['lat'];
        this.source_lng = response.body['results'][0]['geometry']['location']['lng'];
        this.addMarker(this.source_lat, this.source_lng,'A',this.marker_a);
        if(this.from!==undefined && this.to!=undefined){
            this.calculateDistance();
        }
      }
    );
    

  }

  toChanged(){
    if(this.marker_b!==undefined)
      this.marker_b.setMap(null);
    this.mapService.getGeoCodingFromAddress(this.to).then(response=> {  
      this.to = response.body['results'][0]['formatted_address'];
      this.dest_lat = response.body['results'][0]['geometry']['location']['lat'];
      this.dest_lng = response.body['results'][0]['geometry']['location']['lng'];
      this.addMarker(this.dest_lat, this.dest_lng,'B',this.marker_b);
      if(this.from!==undefined && this.to!=undefined){
        this.distance =  this.calculateDistance();
        
      }
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
   calculateDistance(){
    let source_latlng = new google.maps.LatLng(this.source_lat, this.source_lng);
    let destination_latlng = new google.maps.LatLng(this.dest_lat, this.dest_lng);
    let distance;
    if(this.from!==undefined && this.to!=undefined){
      const matrix = new google.maps.DistanceMatrixService();
      matrix.getDistanceMatrix({
        origins: [source_latlng],
        destinations: [destination_latlng],
        travelMode: google.maps.TravelMode.DRIVING,
      }, 
      (response, status ) => this.ngZone.run(() => {
        
        this.distance = response.rows[0].elements[0].distance.text;
     
    }));
    
  }
  
}
  submitRequest(){
    // this.loadingService.showLoader();
    this.router.navigate(["/order"]);
  }
}
