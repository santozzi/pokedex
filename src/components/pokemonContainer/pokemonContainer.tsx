
import { Modal, Pagination, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState, useEffect } from 'react'
import { getConfigFileParsingDiagnostics } from 'typescript';
import { Config } from '../../config/config';
import { FlavorTextEntrie, Pokemon, PokemonCard, PokemonMap, Species } from '../../interfaces'
import { getDescription } from '../../models/pokemonAPI.model'
import { getCardPokemonListService, getDescriptionService, getDescriptionUrlService, getPokemonByName, getPokemonUrlService } from '../../services/pokemon.services'
import { Footer } from '../footer/footer';
import { Header } from '../header/header';
import { GraphicBar } from './itemDetail/graphicBar/graphicBar';
import { ItemDetail } from './itemDetail/itemDetail';
import useMediaQuery from "@mui/material/useMediaQuery";
import { PokemonItem } from './pokemonItem/pokemonItem';
import './styles.css';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '90%',
    backgroundColor: 'white',
    border: '2px solid #000',

    boxShadow: 24,

};

export const PokemonContainer: React.FC = () => {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    const [count, setCount] = useState(10);
    const [page, setPage] = useState(1);
    const [pokemons, setPokemons] = useState<PokemonCard[]>([])
    const [pokemon, setPokemon] = useState<PokemonCard | undefined>()
    const matchesMobile = useMediaQuery("(max-width:950px)");
    const matchesMobile687px = useMediaQuery("(max-width:687px)");

    const pokemonDetail = (id: number) => {
        setPokemon(pokemons.find((pokecard: PokemonCard) => pokecard.id === id))
        matchesMobile687px && handleOpen();
    }
    useEffect(() => {
        try {
            const funcionSync = async () => {

                setPokemons([]);
                const data = await getCardPokemonListService(page);
                setCount(~~(data.count / Config.cantForPagination) + 1);

                data.results.map(async (direPokemon: PokemonMap) => {


                    const pokemonSinDetalle = await getPokemonUrlService(direPokemon.url);
                    const detalle = await getDescriptionUrlService(pokemonSinDetalle.species.url);
                    // const detalle = await getDescriptionService(direPokemon.name);

                    let detalleIdioma = detalle.flavor_text_entries.filter((detail1: FlavorTextEntrie) => detail1.language.name === "es");

                    let detailIdioma = "";


                    if (detalleIdioma.length === 0) {
                        detailIdioma = "El detalle no se encuentra en español";
                    } else {
                        detailIdioma = detalleIdioma[0]
                            .flavor_text;
                    }


                    setPokemons(pokemonsPrev =>
                    ([...pokemonsPrev, {
                        id: pokemonSinDetalle.id,
                        name: pokemonSinDetalle.name,
                        picture: pokemonSinDetalle.sprites.other.dream_world.front_default !== null ? pokemonSinDetalle.sprites.other.dream_world.front_default : pokemonSinDetalle.sprites.other.home.front_shiny,
                        detail: detailIdioma,
                        type: pokemonSinDetalle.types[0].type.name,
                        battle: {
                            hp: pokemonSinDetalle.stats[0].base_stat,
                            attack: pokemonSinDetalle.stats[1].base_stat,
                            defense: pokemonSinDetalle.stats[2].base_stat,
                            special_attack: pokemonSinDetalle.stats[3].base_stat,
                            special_defense: pokemonSinDetalle.stats[4].base_stat,
                            speed: pokemonSinDetalle.stats[5].base_stat,
                        }
                    }])
                    )
                }

                )

            }
            funcionSync();
        } catch (error) {
            console.log(error);

        }

        return () => {
            setPokemons([]);
        }
    }, [page])


    const columns = () => {
        let column = '2, 1fr';
        if (matchesMobile687px) {
            column = '2, 1fr';
        } else if (matchesMobile) {
            column = '1, 1fr';
        }

        return column;
    }


    const gridGarden = {
        display: 'grid',
        justifyContent: 'center',
        gridTemplateColumns: `repeat(${columns()})`,
        gap: '25px'

    }
    const gridContainer = {
        display: 'flex',
        justifyContent: 'center',
        //  gridTemplateColumns: matchesMobile687px ? '1fr 1fr' : '1fr 2fr',
        // gap: '25px',
        gridColumnGap: 0



    }
    return (
        <div style={{ ...gridContainer, position: 'relative', height: '100%' }}>
            {matchesMobile687px &&
                <Header />


            }
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                gap: '15px',

                margin: matchesMobile687px ? '3rem 0 10rem 0' : 0,

            }}>

                <div
                    className='caja'
                    style={{
                        padding: '2rem',

                        minWidth: matchesMobile ? '150px' : '400px',
                        overflowY: matchesMobile687px ? 'hidden' : 'scroll',
                        height: matchesMobile687px ? '100%' : '80vh'

                    }}>

                    <div style={gridGarden}>
                        {pokemons.length > 0

                            ? pokemons.map(({ id, name, picture, detail, type }) => (

                                <PokemonItem
                                    key={id}
                                    name={name}
                                    picture={picture}
                                    description={detail}
                                    type={type}
                                    id={id}
                                    click={pokemonDetail}
                                />
                            ))
                            : <>Loading...</>

                        }



                    </div>


                </div>

                <Box sx={{ backgroundColor: 'white', borderRadius: '1rem', border: '1px solid black', padding: '5px' }}>
                    <Pagination
                        count={count}
                        page={page}
                        onChange={(event, value) => setPage(value)}
                        variant="outlined"
                        shape="rounded"
                        sx={{ color: 'white', backgroundColor: 'white' }}
                    />
                </Box>
                {matchesMobile687px &&
                    <Footer />

                }
            </Box>
            {!matchesMobile687px &&
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '100%',
                    position: 'relative',
                    height: '100vh',
                    backgroundColor: 'rgb(129, 129, 127)'
                }}>

                    <Header />
                    {pokemon !== undefined &&

                        <ItemDetail {...pokemon} />

                    }
                    <Footer />
                </div>}

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    {pokemon !== undefined &&

                        <ItemDetail {...pokemon} />

                    }
                </Box>
            </Modal>
        </div>


    )
}
