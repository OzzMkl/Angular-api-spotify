import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  //autorizacion generada por spotify
  private authorizationKey ='Bearer BQC-4RnPWlTxxXm0JikcP0dWhN6pL3LwvsLd8K0SxkS2t8-1hj3YKUYLLNl5xz97PBth0h1MScYQavYyTCqyz4XGnZUqajHRtCaI57pc6qc0GGbbl933amfg4GTv3h4rQltpzvBszvnPMmYdJkoqe_lggBM_QwMgf6g';
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
