import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  private authorizationKey ='Bearer BQAhOA0DEVFXBohjNRBPrtP3KXTAFxKu0H5jSvcZRRkj_8S_oRfUgrgtyuihDQngdmsEIXBHcWhzIzwBHS8CRhQDn_quFyPAlJ-OM7t0kzYSbaDkIsjulGYBTui8RHbpOJ6K6hbDDb5gbVcejYkXjGSDrHq8xIoTAGQ';
  private httpOptions = {
    headers : new HttpHeaders({
      'Accept'        :'application/json',
      'Content-Type'  :'application/json',
      'Authorization' : this.authorizationKey
    })}
  constructor(private _httpClient: HttpClient) { }
  //obtener todos los artistas
  public getAllArtist(search:any):Observable<any>{
    let artistURL = `https://api.spotify.com/v1/search?q=${search}&type=artist`;
    return this._httpClient.get<any>(artistURL,this.httpOptions);
  }
}
