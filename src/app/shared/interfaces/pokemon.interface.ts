import { AbilityInterface } from './ability.interface';
import { SpriteInterface } from './sprite.interface';

export interface PokemonInterface {
  name: string;
  url: string;
  sprites: SpriteInterface;
  abilities: AbilityInterface[];
}
