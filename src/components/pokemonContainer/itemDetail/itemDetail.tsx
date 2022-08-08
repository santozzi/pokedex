import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import { PokemonCard } from '../../../interfaces';
import { Footer } from '../../footer/footer';
import { Header } from '../../header/header';
import { GraphicBar } from './graphicBar/graphicBar';
import question from '../images/question.png';
import useMediaQuery from "@mui/material/useMediaQuery";

export const ItemDetail: React.FunctionComponent<PokemonCard> = (props) => {
    const { id = 1, name = '', type = '', picture = '', detail = '',
        battle } = props;

    let imagen = question;
    if (picture !== null) {
        imagen = picture;
    }

    const matchesMobile = useMediaQuery("(max-width:687px)");
    return (



        <div style={{
            display: 'flex',
            justifyContent: 'center',

            height: '100%',
            width: '100%',
            //  marginTop: '3rem',
            marginBottom: '2rem',
            flexDirection: `${matchesMobile ? 'column' : 'row'}`

        }}>
            <Card sx={{ backgroundColor: `var(--${type})`, width: `${matchesMobile ? 'auto' : '40%'}` }}>

                <CardActionArea sx={{ height: '100%', display: 'flex', width: '100%', justifyContent: 'center', flexDirection: `${!matchesMobile ? 'column' : 'row'}` }}>

                    <CardMedia
                        component="img"
                        sx={{ maxWidth: '150px', paddingTop: '20px' }}
                        image={imagen}
                        alt="pokemon"

                    />

                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div" sx={{ textTransform: 'capitalize' }}>
                            {name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" >
                            {detail}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" >
                            {`Tipo: ${type}`}
                        </Typography>
                    </CardContent>

                </CardActionArea>
            </Card>
            <Box sx={{ width: `${matchesMobile ? '100%' : '60%'}`, height: `${matchesMobile ? 'auto' : '100%'}` }}>
                {
                    battle !== undefined &&
                    <GraphicBar data={
                        [
                            { label: 'Ataque', data: battle?.attack },
                            { label: 'Defensa', data: battle?.defense },
                            { label: 'HP', data: battle?.hp },
                            { label: 'Ataque especial', data: battle?.special_attack },
                            { label: 'Defensa especial', data: battle?.special_defense },
                            { label: 'Velocidad', data: battle?.speed },
                        ]
                    }
                        title={name}
                        type={type} />
                }
            </Box>
        </div >



    )
}
