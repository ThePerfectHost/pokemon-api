import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { PokemonInterface } from '@shared/interfaces/pokemon.interface'
import { environment } from '@environments/environment';
import { SpriteInterface } from '@shared/interfaces/sprite.interface';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) {}

  // searchPokemonByParams(offset = 0, limit = 50) {
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

  searchPokemonByParams(offset = 0, limit = 0) {
    const filter = `${environment.baseUrlAPI}pokemon/?offset=${offset}&limit=${limit}`;
    console.log('searchPokemonByParams');
    return this.http.get<PokemonInterface[]>(filter);
  }

  getSpritePokemon(url: string) {
    const filter = `${url}`;
    console.log('getSpritePokemon');
    return this.http.get<SpriteInterface>(filter);
  }

  // getAbilities(name: string) {
  //   return this.http.get<PokemonInterface>(`${environment.baseUrlAPI}ability/${name}`);
  // }
  
}
