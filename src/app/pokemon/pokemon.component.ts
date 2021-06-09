import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Pokemon, PokemonData, PokemonResponse, Sprites } from '../pokemon';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss'],
})
export class PokemonComponent implements OnInit {
  pokemonUrl: string = '';
  pokemonDataList: PokemonData[] = [];
  sprites: string[] | null = [];

  constructor(
    private http: HttpClient,
    private pokemonService: PokemonService
  ) {
    pokemonService.getPokemonByName('pikuchu').subscribe((response) => {
      this.pokemonUrl = response.sprites.front_shiny;
    });
    pokemonService.getPokemonAll().subscribe((response) => {
      this.pokemonDataList = response.results;
    });
  }

  ngOnInit(): void {}
  movement(el: HTMLImageElement) {
    el.animate(
      { transform: 'rotate(370deg) translate(100px)' },
      { duration: 1000 }
    );
  }
  showPokemon(pokemon: PokemonData) {
    this.http.get<Pokemon>(pokemon.url).subscribe((response) => {
      console.log(response.sprites.back_default);
      this.pokemonUrl = response.sprites.back_default;

      this.sprites = Object.keys(response.sprites)
        .filter((key) => key.startsWith('back') || key.startsWith('front'))
        .filter((sprites) => (response.sprites as any)[sprites] !== null)
        .map((sprites) => (response.sprites as any)[sprites]);
    });
  }
}
