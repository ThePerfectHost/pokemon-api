import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PokemonInterface } from '@shared/interfaces/pokemon.interface';
import { environment } from '@environments/environment';
import { AbilityDetailInterface } from '@shared/interfaces/pokemon.interface';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  constructor(private http: HttpClient) {}

  searchPokemon(offset = 0, limit = 0) {
    const filter = `${environment.baseUrlAPI}pokemon/?offset=${offset}&limit=${limit}`;
    return this.http.get<PokemonInterface[]>(filter);
  }

  getDetailPokemon(url: string) {
    const filter = `${url}`;
    return this.http.get(filter);
  }

  getDetailAbility(name: string) {
    const filter = `${environment.baseUrlAPI}ability/${name}`;
    return this.http.get<AbilityDetailInterface>(filter);
  }
}
