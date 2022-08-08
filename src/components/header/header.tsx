import { Box } from '@mui/material'
import { Header as classes } from './styles'
import React from 'react'
import title from './images/title.png'
import useMediaQuery from "@mui/material/useMediaQuery";

export const Header: React.FunctionComponent = () => {
    const matchesMobile = useMediaQuery("(max-width:687px)");
    return (
        <Box component='header' sx={classes().headerContainer}>
            {matchesMobile &&
                <Box component='img' src={title} alt='PokeDex' sx={classes().title} />
            }

        </Box>
    )
}
