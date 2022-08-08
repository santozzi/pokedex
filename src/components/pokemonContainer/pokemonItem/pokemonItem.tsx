import React from 'react';

import Card from '@mui/material/Card';

import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';

import Typography from '@mui/material/Typography';
import { Box, CardActionArea } from '@mui/material';
import question from '../images/question.png';



interface Props {
    id?: number;
    name?: string;
    picture?: string;
    description?: string;
    type?: string;
    click?: any;
}



export const PokemonItem = (props: Props) => {
    const { id, name = 'nombre', picture, description, type, click } = props;
    let imagen = question;
    if ((picture !== null) && picture !== undefined) {
        imagen = picture;
    }
    return (



        <Card sx={{ width: 150, height: 200, backgroundColor: `var(--${type})` }}>

            <CardActionArea onClick={() => click(id)} sx={{ height: '100%', display: 'flex', justifyContent: 'center', flexDirection: 'column', marginTop: '1rem' }}>

                <CardMedia
                    component="img"
                    sx={{ width: '50px' }}
                    image={imagen}
                    alt="pokemon"

                />

                <CardContent>
                    <Typography gutterBottom variant="h6" component="div" sx={{ textTransform: 'capitalize' }}>
                        {name}
                    </Typography>
                    {/*    <Typography variant="body2" color="text.secondary" >
                        {description}
                    </Typography> */}
                    {/* <Typography variant="body2" color="text.secondary" >
                        {type}
                    </Typography> */}
                    {<Typography variant="body2" color="text.secondary" >
                        #{id}
                    </Typography>}
                </CardContent>

            </CardActionArea>

        </Card>
    );
}

