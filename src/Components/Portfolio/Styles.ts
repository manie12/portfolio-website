import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme => ({

    portfolio_container: {
        paddingLeft: '6em',
        marginBottom: '2em',
        [theme.breakpoints.down("xs")]: {
            paddingLeft: "0em"
        }

    },
    kipkurui: {
        paddingTop: '3em'
    },
    nav_Bar: {
        paddingTop: '4em',
        textAlign: 'center',
        [theme.breakpoints.down("xs")]: {
            paddingTop: "2em"
        }
    },
    portfolio_title: {
        textAlign: 'center',
        fontWeight: "bold",
        fontSize: '2em',
        marginTop: "2.6em",

        [theme.breakpoints.down("xs")]: {
            marginBottom: "2em",
            marginTop: "2em"
        }
    },
    image: {
        objectFit: 'contain',
        height: "20em",
        width: '30em',
        [theme.breakpoints.down("xs")]: {
            width: "100%",
            objectFit: "cover"
        }

    }

}))