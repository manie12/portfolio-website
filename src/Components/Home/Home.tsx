import React from 'react';
import { useHistory } from 'react-router-dom';
import { Typography, Button, Grid } from '@material-ui/core';
import { useStyles } from './Styles';
import { ArrowRightAltOutlined, MenuOpen } from '@material-ui/icons';

const Home = () => {
    const history = useHistory();

    const classes = useStyles();
    const handleAbout = () => {
        history.push("/about")
    }

    const handlePortfolio = () => {
        history.push("/portfolio")
    }


    return (
        <Grid container className={classes.mobile}   >
            <Grid item sm={6} xs={12} container className={classes.leftContainer} >
                <Grid item sm={12} container justify='space-between' xs={12} className={classes.gridKipkurui}>
                    <Grid item sm={12} xs={12}><Typography className={classes.kipkurui} variant="body1">Kipkurui</Typography></Grid>
                </Grid>
                <Grid item sm={12} xs={12} className={classes.ux}  >
                    <Typography className={classes.uxTypo}>FULL WEB STACK DEVELOPER & UI / UX DESINGNER </Typography>

                </Grid>
                <Grid item sm={12} xs={12} className={classes.iamJacob} >
                    <Typography className={classes.typoiamJacob}>I'M JACOB <br className={classes.br} /> KIPKURUI</Typography>

                </Grid>
                <Grid item sm={6} xs={12} className={classes.boutMeButton}>
                    <Button onClick={handleAbout} fullWidth variant="contained" className={classes.button} endIcon={<ArrowRightAltOutlined />}>
                        MORE ABOUT ME
                    </Button>

                </Grid>

                <Grid item sm={6} xs={12} justify="flex-start" className={classes.boutMe} >
                    <Button fullWidth onClick={handlePortfolio} variant="contained" endIcon={<ArrowRightAltOutlined />}>
                        PORTFOLIO
                    </Button>



                </Grid>
            </Grid>

            <Grid item sm={6} className={classes.imageBack} >
                <img className={classes.image} src='/profile.jpg' alt="profile" />

            </Grid>
        </Grid >
    )
}
export default Home
