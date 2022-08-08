export interface PokemonMap {
    name: string;
    url: string;
}

export interface PokemonList {
    count: number;
    next?: string;
    previous?: string;
    results: PokemonMap[];
}
export interface Type {
    slot: number;
    type: {
        name: string;
        url: string;
    }
}
export interface Stat {
    base_stat: number;
}
export interface Pokemon {
    id: number;
    name: string;
    species: PokemonMap;
    sprites: Sprites;
    types: Type[];
    stats: Stat[];
}
export interface Sprites {
    front_default: string;
    other: {
        dream_world: {
            front_default: string
        },
        home: {
            front_shiny: string
        }
    }
}

export interface FlavorTextEntrie {
    flavor_text: string;
    language: {
        name: string,
        url: string
    }
}
export interface Species {
    flavor_text_entries: FlavorTextEntrie[]
}
export interface BattleState {
    attack: number;
    defense: number;
    special_attack: number;
    special_defense: number;
    hp: number;
    speed: number
}
export interface PokemonCard {
    id?: number,
    name?: string;
    picture?: string;
    detail?: string;
    type?: string;
    battle?: BattleState;
}