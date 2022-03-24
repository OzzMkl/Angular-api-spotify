import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {

  public albumId:string='';
  public album:any;
  public tracks:any;

  constructor(private _activatedRoute:ActivatedRoute,
              private _spotifyService:SpotifyService) { }

  ngOnInit(): void {

    //obtenemos el id del album desde el navegador
    this._activatedRoute.params.subscribe( params =>{
      this.albumId = params['id'];
      console.log(this.albumId)
    });
    //get detalles del album
    this._spotifyService.getAlbum(this.albumId).subscribe( response =>{
      this.album = response;
      //console.log(this.album);
    },error =>{
      console.log(error);
    });
    //obtener canciones de un album
    this._spotifyService.getAllTracks(this.albumId).subscribe(
      response =>{
        this.tracks = response.items;
        //console.log(this.tracks)
    },error =>{
      console.log(error);
    });
  }

}
