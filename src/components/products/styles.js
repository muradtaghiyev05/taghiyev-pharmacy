export default {
    toolbar: (theme) => theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        backgroundColor: (theme) => theme.palette.background.default,
        padding: 3,
    },
    root: {
        flexGrow: 1,
    },
}