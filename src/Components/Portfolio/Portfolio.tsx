import React from 'react';
import { useHistory } from 'react-router-dom';
import { Grid, Button, Typography } from '@material-ui/core';
import { ArrowRight } from '@material-ui/icons';
import { useStyles } from './Styles';

const Portfolio = () => {
    const classes = useStyles();

    const history = useHistory();

    const handleHomeClick = () => {
        history.push('/')
    }
    const handleAboutMe = () => {
        history.push('/about')

    }


    return (
        <Grid container className={classes.portfolio_container} >
            <Grid item sm={12} className={classes.kipkurui}><Typography >Kipkurui Jacob.</Typography></Grid>
            <Grid item sm={12} xs={12} className={classes.nav_Bar}>
                <Button onClick={handleHomeClick} variant="text" color="default" endIcon={<ArrowRight />}>
                    Home
                </Button>
                <Button variant="text" onClick={handleAboutMe} color="default" endIcon={<ArrowRight />}>
                    About Me
                </Button>
            </Grid>
            <Grid className={classes.portfolio_title} item sm={12} xs={12}>PORTFOLIO</Grid>
            <Grid container item justify='center'>
                <Grid item sm={4} xs={12}><img className={classes.image} src="/profile.jpg" alt="profile" /></Grid>
                <Grid item sm={4} xs={12}><img className={classes.image} src="/profile.jpg" alt="profile" /></Grid>
                <Grid item sm={4} xs={12}><img className={classes.image} src="/profile.jpg" alt="profile" /></Grid>

            </Grid>


        </Grid>
    )
}

export default Portfolio
