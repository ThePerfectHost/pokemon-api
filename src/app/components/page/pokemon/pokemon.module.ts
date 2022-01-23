import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { PokemonListComponent } from '@pokemon/pokemon-list/pokemon-list.component';
import { PokemonComponent } from '@pokemon/pokemon.component';
import { LetracapitalPipe } from '@app/shared/pipes/letracapital.pipe';

const COMPONENTS = [
  PokemonListComponent,
  PokemonComponent,
  LetracapitalPipe
];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [CommonModule, RouterModule, InfiniteScrollModule],
  exports: [...COMPONENTS],
})
export class PokemonModule {}
