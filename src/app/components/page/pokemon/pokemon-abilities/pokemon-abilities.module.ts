import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokemonAbilitiesRoutingModule } from './pokemon-abilities-routing.module';
import { PokemonService } from '@app/shared/services/pokemon.service';

@NgModule({
  declarations: [],
  imports: [CommonModule, PokemonAbilitiesRoutingModule],
})
export class PokemonAbilitiesModule implements OnInit {

  constructor(private pokemonSvc: PokemonService) {}

  ngOnInit(): void {

  }

}
