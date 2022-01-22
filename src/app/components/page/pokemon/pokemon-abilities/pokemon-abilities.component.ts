

import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '@app/shared/services/pokemon.service';
import { take } from 'rxjs/operators';
import { AbilityDetailInterface } from '@app/shared/interfaces/ability-detail.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-pokemon-abilities',
  templateUrl: './pokemon-abilities.component.html',
  styleUrls: ['./pokemon-abilities.component.scss']
})
export class PokemonAbilitiesComponent implements OnInit {
  abilityDetail: AbilityDetailInterface = new AbilityDetailInterface;

  constructor(
    private route: ActivatedRoute,
    private pokemonSvc: PokemonService,
    private location: Location) { }

    ngOnInit(): void {

      this.route.params.pipe(take(1)).subscribe((params) => {
        const name = params['name'];
        this.getDetailAbilityFromService(name);
      });

    }


    private getDetailAbilityFromService(name: string): void {
      console.log('+++++++++++++++++++++++++++++++++++++++++++name ->', name);
  
      this.pokemonSvc
        .getDetailAbility(name)
        .subscribe((res: any) => {
          if (res?.flavor_text_entries) {
             console.log('flavor_text_entries --> ',res.flavor_text_entries);
          }

          //probando
          this.abilityDetail.name = 'Ups GRASS moves in a pinch.';
          this.abilityDetail.name = 'ruby-sapphire';
          

        });
    }

  historyBack(): void {
    this.location.back();
  }

}