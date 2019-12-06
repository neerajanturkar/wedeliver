import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class MapService {

  constructor(private httpClient: HttpClient) {

   }
   getGeoCodingFromAddress(address: any): Promise<any> {

    return this.httpClient.get('https://maps.googleapis.com/maps/api/geocode/json',{
      params: {
        address: address,
        key: 'AIzaSyCE7AEAxPPD3TuW-pwG14QZdxHdIdAG8ek'
      },
      observe: 'response'
    })
    .toPromise();
    
   }
   getDistanceFromAtoB(a: any, b: any): Promise<any> {

    return this.httpClient.get('https://maps.googleapis.com/maps/api/distancematrix/json?',{
      params: {
        origins: a,
        destinations: b,
        key: 'AIzaSyCE7AEAxPPD3TuW-pwG14QZdxHdIdAG8ek'
      },
      headers: {
        content:'application/json'
      },
      observe: 'response'
    })
    .toPromise();

   }
}
