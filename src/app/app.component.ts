import { Component, OnInit } from '@angular/core';

import { POKEMONS } from './mock-pokemon-list';
import { Pokemon } from './pokemon';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})

export class AppComponent implements OnInit {
  //(pokemon[])=> type que pokemonListe est un tableau
  pokemonList: Pokemon[] = POKEMONS;
  pokemonSelected: Pokemon|undefined;

  ngOnInit(): void {
    console.table(this.pokemonList);
  }

  selectPokemon(pokemonId: string) {
    // de base c'est en string mais ajouter le "+" transforme en number
    //null avec le "+" et défini par "0"
    const pokemon: Pokemon|undefined = this.pokemonList.find(pokemon => pokemon.id == +pokemonId)
      if(pokemon) {
        console.log(`Vous avez demandé le pokémon ${pokemon.name}`);
        this.pokemonSelected = pokemon;
      }else{
        console.log(`Vous avez demandé un pokémon qui n'existe pas`);
        this.pokemonSelected = pokemon;
      }

  }


}
