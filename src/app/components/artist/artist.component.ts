import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {

  //varibale para asignar el id del artista a buscar
  public artistId:string='';
  //variable para asignar respuesta de servicios
  public artist:any;
  public albums:any;

  constructor( private _activateRoute: ActivatedRoute,
               private _spotifyService:SpotifyService) { }

  ngOnInit(): void {
    //obtenemos el id del artista desde el navegador
    this._activateRoute.params.subscribe( params =>{
      this.artistId =  params['id'];

      //obtenemos detalles el artista
      this._spotifyService.getArtist(this.artistId).subscribe(
        response => {
           this.artist = response
           //console.log(response);
        },error => {
          console.log(error);
        });
      //obtenemos albums del artista
      this._spotifyService.getAllAlbums(this.artistId).subscribe(
        response => {
          this.albums = response.items;
          console.log(this.albums);
        },error =>{
          console.log(error);
        }
      );

    })
      
  }

}
