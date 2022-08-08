import { Box, Typography } from '@mui/material';
import React from 'react';
//import { IsoLogotipo } from '../utils/iconos/logo/isoLogotipo';
import { FooterStyles as classes } from './footerStyles';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
//import { ImStackoverflow } from 'react-icons/im';
//import { Link } from 'react-router-dom';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import LocalPostOfficeIcon from '@mui/icons-material/LocalPostOffice';
import useMediaQuery from "@mui/material/useMediaQuery";
import title from './images/title.png';
export const Footer = () => {
  const matchesMobile = useMediaQuery("(max-width:687px)");
  return (
    <Box
      component='footer'
      sx={classes().footerContainer}>


      <Box sx={classes().tituloCatContactoContainer}>
        {!matchesMobile &&
          <Box component='img' src={title} alt='PokeDex' sx={classes().title} />
        }
      </Box>





      <Box sx={{ ...classes().socialMedias, borderLeft: '1px solid #cccccc55', padding: 4 }}>
        <Box sx={{ color: '#cccccc' }}>
          <Box sx={{ margin: '0 0 0.8rem -1rem', color: 'white' }}><Typography variant="h5" component="h6">Powered By</Typography></Box>

          <Box sx={{ textDecoration: 'none', textAlign: 'left' }}><Typography variant="subtitle2" component="h6" sx={{ display: 'flex', alignItems: 'center' }}><AccountBoxIcon fontSize='small' sx={{ marginRight: '12px' }} />Sergio J. Antozzi </Typography> </Box>
          <Box sx={{ textDecoration: 'none', textAlign: 'left' }}><Typography variant="subtitle2" component="h6" sx={{ display: 'flex', alignItems: 'center' }}><LocalPostOfficeIcon fontSize='small' sx={{ marginRight: '12px' }} />santozzi@gmail.com </Typography> </Box>

        </Box>
        <Box sx={{ ...classes().socialMedias, flexDirection: 'column', gap: '0.5rem', }}>
          <a aria-label="linkedin de sergio antozzi" href='https://www.linkedin.com/in/sergio-antozzi-961891173/' target='_blank' rel="noreferrer"> <LinkedInIcon fontSize='large' /></a>
          <a aria-label="github de sergio antozzi" href='https://github.com/santozzi' target='_blank' rel="noreferrer"> <GitHubIcon fontSize='large' /></a>
        </Box>
      </Box>


    </Box>



  )
}
