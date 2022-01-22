export interface PokemonInterface {
  name: string;
  url: string;
  sprites: SpriteInterface;
  abilities: AbilityInterface[];
}

export interface SpriteInterface {
  front_default: string;
}

export interface AbilityInterface {
  ability: { name: string; url: string };
  is_hidden: boolean;
  slot: number;
}

export class AbilityDetailInterface {
  id: number;
  name: string;
  flavor_text_entries: Array<any>;
}
