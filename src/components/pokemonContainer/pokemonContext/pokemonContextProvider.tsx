import React, { createContext } from 'react'
interface Props {
    children: JSX.Element;
}
//export const PokemonContext = createContext();
export const PokemonContextProvider: React.FunctionComponent<Props> = ({ children }) => {

    return (
        <div>pokemonContextProvider</div>
    )
}
