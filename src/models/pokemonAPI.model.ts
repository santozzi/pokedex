import axios, { AxiosResponse } from 'axios';
import { Config } from '../config/config';
import { PokemonCard, Pokemon, PokemonList, PokemonMap, Species, Sprites } from '../interfaces';


//acceso a un pokemon determinado
export const getNamed = async (id: string) => {
    const { data } = await axios.get<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${id}`);
    return data;


}


//detalle del pokemon
export const getDescription = async (id: string) => {
    const { data } = await axios.get<Species>(`https://pokeapi.co/api/v2/pokemon-species/${id}`);
    return data;
}


export const getDescriptionUrlModel = async (url: string) => {
    const { data } = await axios.get<Species>(url);
    return data;
}

export const getPokemonUrlModel = async (url: string) => {
    const { data } = await axios.get<Pokemon>(url);
    return data;
}
export const getCardPokemonListModel = async (page: number) => {


    const { data } = await axios.get<PokemonList>(`https://pokeapi.co/api/v2/pokemon/?offset=${((page - 1) * Config.cantForPagination)}&limit=${Config.cantForPagination}`);
    console.log(`offset=${((page - 1) * 20)}&limit=20`);

    /* 
        data.results.map(async (direPokemon: PokemonMap) => {
            const pokemonSinDetalle = await getNamed(direPokemon.name);
            const detalle = await getDescription(direPokemon.name);
            
            
            pokeCards.push(
                {
                    id: pokemonSinDetalle.id,
                    name: pokemonSinDetalle.name,
                    picture: pokemonSinDetalle.sprites.front_default,
                    detail: detalle.flavor_text_entries[50].flavor_text
                }
            )
        }
    
        ) */

    return data;

}