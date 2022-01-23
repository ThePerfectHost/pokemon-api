import {
  Component,
  Input,
  ChangeDetectionStrategy,
  OnInit,
} from '@angular/core';
import { AbilityDetailInterface } from '@app/shared/interfaces/pokemon.interface';
import { PokemonInterface } from '@app/shared/interfaces/pokemon.interface';
import { PokemonService } from '@shared/services/pokemon.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styles : ['.blue-text { color: blue; } .center { text-align: center;}'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PokemonComponent implements OnInit {
  @Input() pokemonInterface: PokemonInterface;
  abilityDetail$: Observable<AbilityDetailInterface>;
  firstFlavorText: string;

  constructor(private pokemonSvc: PokemonService) {}

  ngOnInit(): void {
    this.firstFlavorText = '';
  }

  showAbility(name: string) {
    this.firstFlavorText = '';
    this.abilityDetail$ = this.pokemonSvc.getDetailAbility(name);
  }

  checkFlavorTextDuplicate(flavorText: string): boolean {
    if (this.firstFlavorText === '') {
      this.firstFlavorText = flavorText;
      return true;
    }
    return false;
  }
}
