import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  //autorizacion generada por spotify
  private authorizationKey ='Bearer BQDxwwciCk9kHKf9tZiAw4zxLVLU8SvWzBXEh7UhQcJDgzFep594Wye7RDiSK2jpdmtquvL15crw1CcePPPfYpauvk10wDiAS4T1R4vOJjqF83QeRbcqfbqtcEFVOZNgyPoaIYAOtveIZeT5eSci-LOUs25R_OeVVwg';
  //creamos cabeceras
  private httpOptions = {
    headers : new HttpHeaders({
      'Accept'        :'application/json',
      'Content-Type'  :'application/json',
      'Authorization' : this.authorizationKey
    })}
  constructor(private _httpClient: HttpClient) { }
  //obtener todos los artistas
  public getAllArtist(search:any):Observable<any>{
    //url base para buscar artistas
    let artistURL = `https://api.spotify.com/v1/search?q=${search}&type=artist`;
    //retornamos la respuesta
    return this._httpClient.get<any>(artistURL,this.httpOptions);
  }
  //obtener un solo artista
  public getArtist(artistId:any):Observable<any>{
    let artistIdURL='https://api.spotify.com/v1/artists/'+artistId;
    return this._httpClient.get<any>(artistIdURL,this.httpOptions);
  }
  public getAllAlbums(artistId:any):Observable<any>{
    let artistAlbumURL ='https://api.spotify.com/v1/artists/'+artistId+'/albums';
    return this._httpClient.get<any>(artistAlbumURL,this.httpOptions);
  }
}
