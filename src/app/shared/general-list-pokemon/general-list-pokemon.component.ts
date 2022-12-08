import { Component, OnInit } from '@angular/core';
import { ConexionApiService } from 'src/app/service/conexion-api.service';

@Component({
  selector: 'general-list-pokemon',
  templateUrl: './general-list-pokemon.component.html',
  styleUrls: ['./general-list-pokemon.component.scss']
})
export class GeneralListPokemonComponent implements OnInit {

  public getAllPokemons: any;

  constructor(
    private conexionApiService: ConexionApiService
  ) {}
  ngOnInit(): void {
    this.conexionApiService.apiListAllPokemons.subscribe(
      res => {
        this.getAllPokemons = res.results;
        console.log(this.getAllPokemons);
      }
    );
  }
}
