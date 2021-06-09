import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  constructor(private http: HttpClient) {}
  getPokemonByName(pokemonName: string) {
    return this.http.get<any>(
      `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
    );
  }
  getPokemonAll() {
    return this.http.get<any>(`https://pokeapi.co/api/v2/pokemon?offset=100&limit=200`);
  }
}
