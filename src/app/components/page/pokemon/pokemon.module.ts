import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { PokemonListComponent } from '@pokemon/pokemon-list/pokemon-list.component';
import { PokemonAbilitiesComponent } from '@pokemon/pokemon-abilities/pokemon-abilities.component';
import { PokemonComponent } from '@pokemon/pokemon.component';

const COMPONENTS = [
  PokemonListComponent,
  PokemonAbilitiesComponent,
  PokemonComponent,
];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [CommonModule, RouterModule, InfiniteScrollModule],
  exports: [...COMPONENTS],
})
export class PokemonModule {}