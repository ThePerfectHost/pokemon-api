import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonAbilitiesComponent } from './pokemon-abilities.component';

const routes: Routes = [{ path: '', component: PokemonAbilitiesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PokemonAbilitiesRoutingModule { }
