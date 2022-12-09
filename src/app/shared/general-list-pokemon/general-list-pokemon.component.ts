import { Component, OnInit } from '@angular/core';
import { ConexionApiService } from 'src/app/service/conexion-api.service';

@Component({
  selector: 'general-list-pokemon',
  templateUrl: './general-list-pokemon.component.html',
  styleUrls: ['./general-list-pokemon.component.scss']
})
export class GeneralListPokemonComponent implements OnInit {

  private setAllPokemons: any;
  public getAllPokemons: any;
  

  constructor(
    private conexionApiService: ConexionApiService
  ) {}
  ngOnInit(): void {
    this.conexionApiService.apiListAllPokemons.subscribe(
      res => {
        this.setAllPokemons = res.results;
        this.getAllPokemons = this.setAllPokemons;
      }
    );
  }

  public getSearch(value: string){
    const filter = this.setAllPokemons.filter( (res: any ) => {
      return !res.name.indexOf(value.toLowerCase());
    });
    this.getAllPokemons = filter;
  }
  
}
