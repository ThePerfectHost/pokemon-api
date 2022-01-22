import { Component, Input, ChangeDetectionStrategy, Output, EventEmitter, OnInit} from '@angular/core';
import { AbilityDetailInterface } from '@app/shared/interfaces/ability-detail.interface';
import { PokemonInterface } from '@app/shared/interfaces/pokemon.interface';
import { PokemonService } from '@shared/services/pokemon.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PokemonComponent implements OnInit {
  @Input() pokemonInterface: PokemonInterface;
  // @Output() emisorAbility = new EventEmitter();
  abilityDetail$: Observable<AbilityDetailInterface>;

  abilityName: string;
  abilityLoaded: boolean;

  constructor(private pokemonSvc: PokemonService) {}

  ngOnInit(): void {
    this.abilityLoaded = false;
  }


  showAbility(name: string) {
    console.log('LLEGOOOOOOOOOOOO --> ', name);
    
    this.abilityDetail$ = this.pokemonSvc.getDetailAbility(name);

  }

}
