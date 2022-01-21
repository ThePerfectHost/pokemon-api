import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { PokemonInterface } from '@shared/interfaces/pokemon.interface'
import { environment } from '@environments/environment';
import { SpriteInterface } from '@shared/interfaces/sprite.interface';
import { AbilityDetailInterface } from '../interfaces/ability-detail.interface';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) {}

  // searchPokemon(offset = 0, limit = 50) {
  //   const filter = `${environment.baseUrlAPI}pokemon/?offset=${offset}&limit=${limit}`;
  //   let pokemonList: PokemonInterface[] = [];
    
  //   let pokemonArr: any = this.http.get<PokemonInterface[]>(filter);

  //   if(pokemonArr){
  //     for (let i = 0; i < pokemonArr.length; i++) {
  //       let pokemon = pokemonArr[i];
  //       let sprite: any = this.getSpritePokemon(pokemon.url);
  //       if(sprite){
  //         pokemon.image = sprite.front_default;
  //       }
  //       pokemonList.push(pokemon);
  //     }
  //   }

  //   return pokemonList;
  // }

  searchPokemon(offset = 0, limit = 0) {
    const filter = `${environment.baseUrlAPI}pokemon/?offset=${offset}&limit=${limit}`;
    console.log('searchPokemonByParams');
    return this.http.get<PokemonInterface[]>(filter);
  }

  getDetailPokemon(url: string) {
    const filter = `${url}`;
    console.log('getDetailPokemon');
    return this.http.get(filter);
  }

  getDetailAbility(name: string) {
    const filter = `${environment.baseUrlAPI}ability/${name}`;
    console.log('+++++++++++++getDetailAbility --> ', filter);
    return this.http.get(filter);
  }
  
}
