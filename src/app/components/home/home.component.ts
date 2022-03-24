import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public search:string = '';
  public artists:any;

  constructor( private _spotifyService:SpotifyService) { }

  ngOnInit(): void {
  }
  //buscar artistas
  public searchArtist(){
    this._spotifyService.getAllArtist(this.search).subscribe(
      response => {
        this.artists = response.artists
        //console.log(response)
      },error =>{
        console.log(error);
      }
    )
  }

}
