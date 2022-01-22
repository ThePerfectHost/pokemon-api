import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { PokemonModule } from '@pokemon/pokemon.module';
import { SearchComponent } from '@app/shared/components/search/search.component';
import { HeaderComponent } from '@app/shared/components/header/header.component';


@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    PokemonModule
  ]
})
export class HomeModule { }
