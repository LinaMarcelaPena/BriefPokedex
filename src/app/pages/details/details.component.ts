import { APP_ID, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { forkJoin } from 'rxjs';
//servicio consumir API
import { ConexionApiService } from 'src/app/service/conexion-api.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit{

  private urlPokemon: string = 'https://pokeapi.co/api/v2/pokemon';
  private urlName: string = 'https://pokeapi.co/api/v2/pokemon-species';

  public pokemon: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private conexionApiService: ConexionApiService
  ) {}

  ngOnInit(): void {
    this.getpokemon;
  }

  get getpokemon(){
    const id = this.activatedRoute.snapshot.params['id'];
    const pokemon = this.conexionApiService.apiGetPokemons(`${this.urlPokemon}/${id}`);
    const name = this.conexionApiService.apiGetPokemons(`${this.urlName}/${id}`);

    return forkJoin([pokemon, name]).subscribe(
      res => {
        this.pokemon = res;
      }
    );
  }
}
