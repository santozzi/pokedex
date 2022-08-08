import { getCardPokemonListModel, getDescription, getDescriptionUrlModel, getNamed, getPokemonUrlModel } from '../models/pokemonAPI.model'

export const getPokemonByName = (id: string) => {
    return getNamed(id);
}
export const getCardPokemonListService = (page: number) => {
    return getCardPokemonListModel(page);
}
export const getDescriptionService = (id: string) => {
    return getDescription(id);
}
export const getPokemonUrlService = (url: string) => {
    return getPokemonUrlModel(url);
}
export const getDescriptionUrlService = (url: string) => {
    return getDescriptionUrlModel(url);
}