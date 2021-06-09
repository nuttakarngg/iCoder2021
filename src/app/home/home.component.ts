import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, switchMap } from 'rxjs/operators';
import { PokemonService } from '../pokemon.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  status: string = 'Y';
  Date = new Date();
  constructor(
    private http: HttpClient,
    private pokemonService: PokemonService
  ) {}
  pokemonFormControl = new FormControl();

  pokemon$ = this.pokemonFormControl.valueChanges.pipe(
    debounceTime(400),
    switchMap((data) => this.pokemonService.getPokemonByName(data))
  );

  ngOnInit() {
    this.sumResult();
  }
  title = 'iCoder2021';
  result: number = 0;
  actionBarNumber1: number = 5;
  actionBarNumber2: number = 10;
  actionBarNumber3: number = 50;
  students = [
    { name: 'Boppin', status: 'N' },
    { name: 'Code', status: 'Y' },
  ];
  sumResult() {
    this.result =
      this.actionBarNumber1 + this.actionBarNumber2 + this.actionBarNumber3;
  }
}
