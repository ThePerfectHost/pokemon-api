import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'check-in',
  },
  {
    path: 'check-in',
    loadChildren: () =>
      import('./components/page/check-in/check-in.module').then(
        (m) => m.CheckInModule
      ),
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
    path: '**',
    pathMatch: 'full',
    redirectTo: 'check-in',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
