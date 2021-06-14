import React from 'react';
import { useHistory } from 'react-router-dom';
import { Grid, Typography, Button } from '@material-ui/core';
import { ArrowRight } from '@material-ui/icons';
import { useStyles } from './Styles';


const About = () => {
    const classes = useStyles()
    const history = useHistory();

    const handleHomeClick = () => {
        history.push('/')
    }
    const handlePort = () => {
        history.push("/portfolio")
    }

    return (
        <Grid container className={classes.container} >
            <Grid item sm={12} xs={12}> <Typography variant="h6">Kipkurui.</Typography></Grid>
            <Grid item sm={12} xs={12} className={classes.navBar}  >
                <Button className={classes.button} onClick={handleHomeClick} variant="text" color="default" endIcon={<ArrowRight />}>
                    Home
                </Button>
                <Button className={classes.button} variant="text" onClick={handlePort} color="default" endIcon={<ArrowRight />}>
                    Check Out My Portfolio
                </Button>
            </Grid>
            <Grid className={classes.aboutMe} item sm={12} xs={12}>About Me</Grid>

            <Grid container className={classes.bottom_link} >
                <Grid item container alignItems="center" style={{ width: "100%", }} sm={6} xs={12}>
                    <Grid item sm={6} xs={12} className={classes.box} >
                        <Typography className={classes.typoBox} >12</Typography>
                        <Typography>Happy Clients</Typography>
                    </Grid>
                    <Grid item sm={6} xs={12} className={classes.box}>
                        <Typography className={classes.typoBox}>24</Typography>
                        <Typography>Projects Done</Typography>
                    </Grid>
                    <Grid item sm={6} xs={12} className={classes.box} >
                        <Typography className={classes.typoBox}>500</Typography>
                        <Typography>Coffee Cups</Typography>
                    </Grid>
                    <Grid item sm={6} xs={12} className={classes.box}>
                        <Typography className={classes.typoBox}>50</Typography>
                        <Typography>Weekly Hours</Typography>
                    </Grid>

                </Grid>
                <Grid item sm={6} xs={12}>
                    <Typography className={classes.bio}>A FullStack Web Developer && UI/UX <br />Designer from Nairobi,Kenya</Typography>
                    <Typography className={classes.text}>Far far away, behind the word mountains, far from the countries Souht Africa and Egypt, there live the blind texts.
                    </Typography>

                    <Grid container className={classes.cont} alignItems="flex-end">
                        <Grid item sm={6} xs={12}>
                            <Typography>Name: <strong className={classes.thick}>Jacob Kipkurui Rono</strong></Typography>
                        </Grid>
                        <Grid item sm={6} xs={12} >
                            <Typography>Email :<strong className={classes.thick}>jacobkip254@gmail.com</strong></Typography>
                        </Grid>
                        <Grid item sm={6} xs={12} >
                            <Typography>Phone:<strong className={classes.thick}>+254703121351</strong></Typography>
                        </Grid>
                        <Grid item sm={6} xs={12}>
                            <Typography>Address:<strong className={classes.thick}>Langata,Nairobis</strong></Typography>
                        </Grid>
                    </Grid>
                </Grid>

            </Grid>

            <Grid container className={classes.skills} >
                <Grid item className={classes.skills_title} sm={12} xs={12}>
                    Skills
                </Grid>
                <Grid item sm={4} xs={12}>
                    <Grid className={classes.title}>UI/UX DESIGN </Grid>
                    <Grid>Figma tools</Grid>
                    <Grid>ADOBE XD  tools</Grid>
                    <Grid>CANVA tools</Grid>
                    <Grid>DATA COLLECTIONS  </Grid>

                </Grid>
                <Grid item sm={4} xs={12}>
                    <Grid className={classes.title}>FRONTEND DEVELOPMENT</Grid>
                    <Grid>REACTS.JS</Grid>
                    <Grid>NEXT.JS</Grid>
                    <Grid>JAVASCRIPT</Grid>
                    <Grid>TYPESCRIPT</Grid>
                    <Grid>APOLLO WITH GRAPHQL</Grid>
                    <Grid>REDUX</Grid>
                    <Grid>CONTEXT API</Grid>
                    <Grid>MATERIAL UI CSS FRAME WORK</Grid>
                    <Grid>CSS3</Grid>
                    <Grid>TAILWIND CSS</Grid>
                </Grid>

                <Grid item sm={4} xs={12}>
                    <Grid className={classes.title}>BACKEND DEVELOPMENT </Grid>
                    <Grid>NODE.JS </Grid>
                    <Grid>APOLLO SERVER WITH GRAPHQL </Grid>
                    <Grid>REST API</Grid>
                    <Grid>EXPRESS</Grid>
                    <Grid>MONGODB </Grid>
                    <Grid>FIREBASE </Grid>
                </Grid>

            </Grid >


        </Grid >
    )
}

export default About
