import React from 'react';
import { Avatar, Button, Container, createTheme, Grid, ThemeProvider, Typography } from '@mui/material';
import { Box } from '@mui/system';
import Logo from "../../assets/images/logo.jpg";
import ListIcon from '@mui/icons-material/List';
import ButtonGroup from '@mui/material/ButtonGroup';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import {theme} from "../../utils/theme.js";


const Header = () => {
  return (
    <div>
        <Grid>
            <Grid boxShadow={6} container direction="row" alignItems="center" p={3}>
            <Grid md={6} xs={12} display="flex" justifyContent="start" alignItems="center">
                <Box component="img" sx={{width: 160}} alt="Logo" src={Logo} marginRight="30px"/>
                <ListIcon sx={{cursor: 'pointer'}} fontSize='large'/>
            </Grid>
            <Grid md={6} xs={12} display="flex" justifyContent="end">
            <ThemeProvider theme={theme}>
                <ButtonGroup
                disableElevation
                variant="contained"
                aria-label="Disabled elevation buttons"
                sx={{marginRight: 4}}
                >
                <Button sx={{borderTopLeftRadius: 40, borderBottomLeftRadius: 40, py: 1, px: 4}} endIcon={<ArrowDropDownIcon/>}>Messages</Button>
                <Button sx={{borderTopRightRadius: 40, borderBottomRightRadius: 40, py: 1, px: 4}} endIcon={<ArrowDropDownIcon/>}>Notification</Button>
                </ButtonGroup>
                <Box display="flex" justifyContent="start" alignItems="center">
                    <Typography variant='span'>Tarun Kumar</Typography>
                    <Avatar sx={{marginLeft: 1}} alt='use-image' src='https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(9).webp' />
                </Box>

            </ThemeProvider>
            </Grid>
            </Grid>
        </Grid>
    </div>
  )
}

export default Header;
