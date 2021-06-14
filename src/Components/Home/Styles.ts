import { makeStyles } from '@material-ui/core';
import image from '../../Images/profile.jpg'
export const useStyles = makeStyles((theme) => ({
    mobile: {
        [theme.breakpoints.down("xs")]: {
            width: '100%',

        }
    },
    image: {
        objectFit: "contain",
        height: "100%",
        width: "100%",
        [theme.breakpoints.down('xs')]: {
            // display: "none"
        }
    },
    imageBack: {
        [theme.breakpoints.down("xs")]: {
            width: '100%',
            backgroundImage: `url(${image})`,
            backgroundSize: "cover",
            height: "100%"
        }

    },
    leftContainer: {
        paddingLeft: '5em',
        [theme.breakpoints.down("xs")]: {
            paddingLeft: "0em"
        }
    },
    gridKipkurui: {
        height: '0em',
        paddingTop: "3em",
        [theme.breakpoints.down("xs")]: {
            paddingTop: '0em'
        }
    },
    kipkurui: {
        fontSize: '1.4em',
        [theme.breakpoints.down("xs")]: {
            fontSize: "1.4em"
        }
    },
    ux: {
        position: "absolute",
        top: '10em',
        color: "#1c3735",
        height: '0em',
        [theme.breakpoints.down("xs")]: {
            top: "4em"
        }
    },
    uxTypo: {
        height: "0em",
        color: "#e28743",
        [theme.breakpoints.down("xs")]: {
            fontSize: ".8em",
            textSize: 'center',
            textAlign: 'center'
        }
    },
    iamJacob: {
        height: '0em',
        position: 'absolute',
        top: "11.5em",
        [theme.breakpoints.down("xs")]: {
            top: "6em",
        }
    },
    typoiamJacob: {
        fontSize: '3em',
        letterSpacing: '.3em',
        fontWeight: 'bold',
        [theme.breakpoints.down("xs")]: {
            fontSize: "1.5em",
            //  marginLeft: "4.5em"
            fontWeight: 'bold',

        }
    },
    br: {
        [theme.breakpoints.down("xs")]: {
            display: "none"
        }
    },
    boutMeButton: {

        width: '0em',
        [theme.breakpoints.down("xs")]: {
            marginTop: "10em"
        }
    },
    boutMe: {
        width: '0em',
        [theme.breakpoints.down("xs")]: {
            marginTop: "0.5em",

        }
    },
    button: {
        backgroundColor: '#e28743'
    },
    //mobile version

    menu: {
        display: 'none',
        [theme.breakpoints.down("xs")]: {
            display: "block",
            textAlign: 'end'
        }
    }

}))