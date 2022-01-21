import { DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { AbilityInterface } from '@app/shared/interfaces/ability.interface';
import { SpriteInterface } from '@app/shared/interfaces/sprite.interface';
import { PokemonInterface } from '@shared/interfaces/pokemon.interface';
import { PokemonService } from '@shared/services/pokemon.service';
import { take, filter } from 'rxjs/operators';

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

  requestHead: RequestHead = {
    count: null,
    next: null,
    previous: null,
  };

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
      this.searchPokemonFromService();
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
    this.route.queryParams.pipe(take(1)).subscribe((params) => {
      console.log('Params->', params);
      //this.query = params['q'];
      this.searchPokemonFromService();
      this.getDetailPokemonFromService('https://pokeapi.co/api/v2/pokemon/1');
    });
  }

  private searchPokemonFromService(): void {
    //console.log('query ->', this.query);
    console.log('offset ->', this.offset);
    console.log('limit ->', this.limit);

    this.pokemonSvc
      .searchPokemon(this.offset, this.limit)
      .pipe(take(1))
      .subscribe((res: any) => {
        if (res?.results?.length) {
          this.pokemonList = [...this.pokemonList, ...res.results];
          this.requestHead.count = res.count;
          this.requestHead.next = res.next;
          this.requestHead.previous = res.previous;

          //     for (let i = 0; i < this.pokemonList.length; i++) {
          //       let element = this.pokemonList[i];

          //       this.pokemonSvc
          //         .getDetailPokemon(element.url)
          //         .subscribe((res: any) => {
          //           if (res?.sprites) {
          //             element.image = res.sprites.front_default;
          //             console.log('res.sprites.front_default --> ',res.sprites.front_default);
          //           } else {
          //             element.image = '';
          //           }
          //           if(res?.sprites) {

          //           } else {

          //           }
          //         });
          //     }
        } else {
          this.pokemonList = [];
        }
      });
  }

  private getDetailPokemonFromService(url: string): void {

    let sprites: SpriteInterface;
    let abilities: AbilityInterface[];

    this.pokemonSvc
      .getDetailPokemon(url)
      .pipe(take(1))
      .subscribe((res: any) => {
        if (res?.sprites) {
          //console.log('res.sprites.front_default --> ', res.sprites.front_default);
          sprites = res.sprites;
          console.log('+++ sprites --> ', sprites);
        }
        if (res?.abilities?.length) {
         // console.log('res.abilities --> ', res.abilities);
          abilities = res.abilities;
          console.log('abilities --> ', abilities);
        }
      });
  }
}
