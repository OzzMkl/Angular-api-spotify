import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  //modelo de busqueda
  public search:string = '';
  //Aqui asignaremos la respuesta de la api
  public artists:any;

  constructor( private _spotifyService:SpotifyService) { }

  ngOnInit(): void {
  }
  //buscar artista
  public searchArtist(){
    //empezamos llamadno la api, asignandole el valor a buscar
    this._spotifyService.getAllArtist(this.search).subscribe(
      response => {
        //asignamos la respuesta recibida a nuestra variable
        this.artists = response.artists
        //console.log(response)
      },error =>{
        //si se genera error lo mostramos por consola
        console.log(error);
      }
    )
  }

}
