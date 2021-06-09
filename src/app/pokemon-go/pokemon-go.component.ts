import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { PokemonData, PokemonResponse, Pokemon } from '../pokemon';

@Component({
  selector: 'app-pokemon-go',
  templateUrl: './pokemon-go.component.html',
  styleUrls: ['./pokemon-go.component.scss'],
})
export class PokemonGoComponent implements OnInit {
  cities: any[] = [];
  pokemonDataList: PokemonData[] = [];
  sprites: string[] | null = [];
  cityFromControl = new FormControl();
  constructor(private http: HttpClient) {
    this.http
      .get<PokemonResponse>(
        'https://pokeapi.co/api/v2/pokemon?offset=100&limit=200'
      )
      .subscribe((response) => {
        this.pokemonDataList = response.results;
      });
  }
  selectPokemon(event: { originalEvent: any; value: PokemonData }) {
    const pokemon = event.value;
    this.showPokemon(pokemon);
  }
  ngOnInit(): void {
    // this.cities = [
    //   { name: 'New York', code: 'NY' },
    //   { name: 'Rome', code: 'RM' },
    //   { name: 'London', code: 'LDN' },
    //   { name: 'Istanbul', code: 'IST' },
    //   { name: 'Paris', code: 'PRS' },
    // ];
  }
  abilities: string[] = [];
  showPokemon(pokemon: PokemonData) {
    this.http.get<Pokemon>(pokemon.url).subscribe((response) => {
      this.abilities = response.abilities.map(abi => abi.ability.name)
      this.sprites = Object.keys(response.sprites)
        .filter((key) => key.startsWith('back') || key.startsWith('front'))
        .filter((sprites) => (response.sprites as any)[sprites] !== null)
        .map((sprites) => (response.sprites as any)[sprites]);
    });
  }
}
