import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles(() => ({
    dialogActions: {
        padding: "2rem"
    },
    paperUsuarios: {
        height: '10rem',
    },
    boxCabecalho: {
        backgroundColor: "#F6F6F6",
    },
    gridCabecalho: {
        justifyContent: "center",
        backgroundColor: "#F6F6F6",
    },
    gridLogin: {
        paddingTop: '9rem'
    },
    imgHome: {
        paddingTop: '6rem',
        width: '40rem',
        height: "30rem",
    },
    imagemIcon: {
        width: '10rem',
        height: "10rem",
    },
    tituloMenu: {
        textAlign: 'center',
       // fontWeight: 'bold'
    },
    gridContainerMenu: {
        paddingTop: '2rem',
        justifyContent: 'center'
    },
    boxImageMenu: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    paperMenu: {
        cursor: 'pointer'
    },
    fundo: {
        background: "#F0FFFF",
        paddingTop: '1rem',
        minHeight: '100vh',
    }

}));