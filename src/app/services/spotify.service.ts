import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  //autorizacion generada por spotify
  private authorizationKey ='Bearer BQAlwsB4UezwztGmb17tEps418cAGL1sV_-x8i6z5a7yltGvw2oJB7YSXXCuM3552IAbUh8f0A5Qz8x-MIrryf-aZKAyq1GAsceWfsJecytZNTdMqXGTcgbjyF9t2f6p_blvRc6kW9I2usJWEFK_an0fF91BZKZY8B8';
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
  //obtener todos los albunes de un artista
  public getAllAlbums(artistId:any):Observable<any>{
    let artistAlbumURL ='https://api.spotify.com/v1/artists/'+artistId+'/albums';
    return this._httpClient.get<any>(artistAlbumURL,this.httpOptions);
  }
  //obtener detalles de un album
  public getAlbum(albumId:any):Observable<any>{
    let albumIdURL='https://api.spotify.com/v1/albums/'+albumId;
    return this._httpClient.get<any>(albumIdURL,this.httpOptions);
  }
  //obtener canciones de un album
  public getAllTracks(albumId:any):Observable<any>{
    let tracksURL='https://api.spotify.com/v1/albums/'+albumId+'/tracks';
    return this._httpClient.get<any>(tracksURL,this.httpOptions);
  }

}
