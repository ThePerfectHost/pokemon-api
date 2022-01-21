//import { Component, OnInit } from '@angular/core';
import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { PokemonInterface } from '@app/shared/interfaces/pokemon.interface';

@Component({
  selector: 'app-pokemon',
  template: `
  <div class="card">
    <div class="image">
      <a [routerLink]="['/pokemon-abilities', 'overgrow']">
        hola 1.... <img
          [src]="pokemonInterface.image"
          [alt]="pokemonInterface.name"
          class="card-img-top"
        />
      </a>
    </div>
    <div class="card-inner">
      <div class="header">
        <a [routerLink]="['/pokemon-abilities', pokemonInterface.name]">
          <h2> hola 2.....{{ pokemonInterface.url }}</h2>
        </a>
        <h4 class="text-muted">hola 3.....{{ pokemonInterface.name }}</h4>
        <small class="text-muted">hola 4....{{ pokemonInterface.image }}....</small>
      </div>
    </div>
  </div>
`,
changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PokemonComponent {
  @Input() pokemonInterface: PokemonInterface;
}
