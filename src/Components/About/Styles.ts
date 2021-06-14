import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({

    container: {
        paddingLeft: "7em",
        [theme.breakpoints.down("xs")]: {
            paddingLeft: "0em"
        }
    },
    navBar: {
        paddingTop: "10em",
        textAlign: 'center',
        [theme.breakpoints.down("xs")]: {
            texAlign: "center",
            paddingTop: "3em"
        }
    },
    button: {
        [theme.breakpoints.down("xs")]: {
            margin: "auto",
            width: "100%"

        }
    },
    aboutMe: {
        textAlign: 'center',
        fontWeight: "bold",
        fontSize: '2em',
        [theme.breakpoints.down("xs")]: {
            marginTop: "2em"
        }
    },
    box: {
        textAlign: 'center',
        [theme.breakpoints.down("xs")]: {
            width: "100%",
            height: "10em",
            fontSize: "1.7em"
        }
    },
    bottom_link: {
        height: '100%',

        backgroundColor: '#ffffff',
        marginTop: '8em'
    },
    bio: {
        lineHeight: '2em',
        fontWeight: 'bold',
        fontSize: '1.68em',
        letterSpacing: '0.06em'
    },
    text: {
        color: "grey"
    },
    cont: {
        marginTop: '2em',
        [theme.breakpoints.down("xs")]: {
            lineHeight: "1.7em"

        }
    },
    thick: {
        color: "#e28743"
    },
    typoBox: {
        color: "#e28743",
        fontWeight: 'bold',
        fontSize: '2em'

    },
    skills_title: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: '2em',
        letterSpacing: '0.2em'
    },
    skills: {
        marginTop: '7em',
        lineHeight: '1.6em',
        [theme.breakpoints.down("xs")]: {
            lineHeight: '2em',

        }
    },
    title: {
        fontWeight: 'bold',
        letterSpacing: '0.2em',
        marginTop: '2em',
        color: '#e28743'

    }

}))