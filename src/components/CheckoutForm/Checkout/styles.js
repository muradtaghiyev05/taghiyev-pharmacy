export default {
    appBar: {
        position: 'relative',
    },
    toolbar: (theme) => theme.mixins.toolbar,
    layout: (theme) => ({
        marginTop: '5%',
        width: 'auto',
        marginLeft: 2,
        marginRight: 2,
        [theme.breakpoints.up('sm')]: {
            width: 600,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    }),
    paper: (theme) => ({
        marginTop: 3,
        marginBottom: 3,
        padding: 2,
        [theme.breakpoints.down('xs')]: {
            width: '100%',
            marginTop: 60,
        },
        [theme.breakpoints.up('sm')]: {
            marginTop: theme.spacing(6),
            marginBottom: theme.spacing(6),
            padding: theme.spacing(3),
        },
    }),
    stepper: {
        padding: (theme) => theme.spacing(3, 0, 5),
    },
    buttons: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    button: {
        marginTop: 3,
        marginLeft: 1,
    },
    divider: {
        margin: '20px 0',
    },
    spinner: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
}