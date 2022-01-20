import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./components/page/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'pokemon-list',
    loadChildren: () =>
      import('./components/page/pokemon/pokemon-list/pokemon-list.module').then(
        (m) => m.PokemonListModule
      ),
  },
  {
    path: 'pokemon-abilities/:name',
    loadChildren: () =>
      import(
        './components/page/pokemon/pokemon-abilities/pokemon-abilities.module'
      ).then((m) => m.PokemonAbilitiesModule),
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'home',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
