import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//components
import { GeneralHeaderComponent } from './general-header/general-header.component';
import { GeneralSearchComponent } from './general-search/general-search.component';
import { GeneralListPokemonComponent } from './general-list-pokemon/general-list-pokemon.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    GeneralHeaderComponent,
    GeneralSearchComponent,
    GeneralListPokemonComponent
  ],
  exports: [
    GeneralHeaderComponent,
    GeneralSearchComponent,
    GeneralListPokemonComponent
  ],  
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedModule { }
