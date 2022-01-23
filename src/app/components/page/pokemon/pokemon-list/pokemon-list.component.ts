import { DOCUMENT } from '@angular/common';
import {
  Component,
  EventEmitter,
  HostListener,
  Inject,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { PokemonInterface } from '@shared/interfaces/pokemon.interface';
import { PokemonService } from '@shared/services/pokemon.service';
import { filter, take } from 'rxjs/operators';

type RequestHead = {
  count: null;
  next: null;
  previous: null;
};

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss'],
})
export class PokemonListComponent implements OnInit {

  pokemonList: PokemonInterface[] = [];
  loaded: boolean;

  requestHead: RequestHead = {
    count: null,
    next: null,
    previous: null,
  };

  search: '';
  showGoUpButton = false;
  private offset = 0;
  private limit = 20;
  private hideScrollHeight = 200;
  private showScrollHeight = 500;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private pokemonSvc: PokemonService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.onUrlChanged();
  }

  ngOnInit(): void {
    console.log('+++++++++ PokemonListComponent.ngOnInit', );
    this.loaded = false;
    this.getPokes();
  }

  ngOnDestroy() {}

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    if (
      (window.pageYOffset ||
        this.document.documentElement.scrollTop ||
        this.document.body.scrollTop) > this.showScrollHeight
    ) {
      this.showGoUpButton = true;
    } else if (
      this.showGoUpButton &&
      (window.pageYOffset ||
        this.document.documentElement.scrollTop ||
        this.document.body.scrollTop) < this.hideScrollHeight
    ) {
      this.showGoUpButton = false;
    }
  }

  onScrollDown(): void {
    if (this.requestHead.next) {
      this.offset = this.offset + this.limit;
      this.getPokes();
    }
  }

  onScrollTop(): void {
    this.document.body.scrollTop = 0; // Safari
    this.document.documentElement.scrollTop = 0; // Others
  }

  private onUrlChanged(): void {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.pokemonList = [];
        this.offset = 0;
        this.getPokes();
      });
  }

 
  private getPokes(): void {
    console.log('offset ->', this.offset);
    console.log('limit ->', this.limit);
    console.log('antes this.search ->', this.search);
    
    this.route.queryParams.pipe(take(1)).subscribe((params) => {
      console.log('PokemonListComponent.getPokes.Params->', params);
      console.log(params['q']);
      this.search = params['q'];
    });
    
    console.log('despues this.search ->', this.search);

    // this.pokemonList = [];

    this.pokemonSvc
      .searchPokemon(this.offset, this.limit)
      .subscribe((res: any) => {
        if (res?.results?.length) {
          this.pokemonList = [...this.pokemonList, ...res.results];
          this.requestHead.count = res.count;
          this.requestHead.next = res.next;
          this.requestHead.previous = res.previous;

          for (let i = 0; i < this.pokemonList.length; i++) {
            var element = this.pokemonList[i];
            this.setDetail(element);
          }
        } else {
          this.pokemonList = [];
        }
      });
  }

  private setDetail(pokemon: PokemonInterface): void {
    this.pokemonSvc.getDetailPokemon(pokemon.url).subscribe((res: any) => {
      if (res?.sprites) {
        pokemon.sprites = res.sprites;
      }
      if (res?.abilities?.length) {
        pokemon.abilities = res.abilities;
      }
      this.loaded = true;
    });
  }
}
