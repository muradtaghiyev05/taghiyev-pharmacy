import { Fade } from "@mui/material";

const drawerWidth = 0;

export default {
    AppBar: {
        boxShadow: 'none',
        borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
        width: { sm:`calc(100% - ${drawerWidth}px)` },
        marginLeft: { sm: drawerWidth },
    },
    title: {
        flexGrow: 1,
        alignItems: 'center',
        display: 'flex',
        textDecoration: 'none',
    },
    image: {
        marginRight: '10px',
    },
    menuButton: {
        marginRight: 2,
        display: {sm: 'none'},
    },
    grow: {
        flexGrow: 1,
    },
    search: {
        position: 'relative',
        borderRadius: (theme) => theme.shape.borderRadius,
        backgroundColor: (theme) => Fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: (theme) => Fade(theme.palette.common.white, 0.25),
        },
        marginRight: 2,
        marginLeft: 0,
        width: '100%',
        width: { sm:'auto' },
    },
    searchIcon: {
        padding: (theme) => theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: (theme) => theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: (theme) => `calc(1em + ${theme.spacing(4)}px)`,
        transition: (theme) => theme.transitions.create('width'),
        width: '100%',
        width: { md:'20ch' },
    },
};

