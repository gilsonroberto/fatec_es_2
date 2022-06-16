import { AppBar, Badge, Container, Grid, IconButton, Paper, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Cabecalho from "../components/cabecalho";
import menu from "../initial-state/menu";
import { useStyles } from "../MakeStyles/styles";
import MenuIcon from '@mui/icons-material/Menu';
import ResponsiveAppBar from "../components/appBar";
import AppBarReponsivo from "../components/appBar";

export default function Principal() {
    const classes = useStyles();

    const handleRedirect = (redirect: string | URL) => {
        window.location.replace(redirect);
    }

    const [open, setOpen] = React.useState(true);


    return (
        <div>
            <header>
                <AppBarReponsivo></AppBarReponsivo>
            </header>
            <div className={classes.fundo}>
                <Container >
                    <Grid container spacing={3} className={classes.gridContainerMenu}>
                        {menu.map((item: any, key: any) => (
                            <Grid item xs={4} key={key}>
                                <Box p={2}>
                                    <Paper onClick={() => handleRedirect(item.path)} className={classes.paperMenu} elevation={6}>
                                        <Box p={3} className={classes.boxImageMenu}>
                                            <img src={item.image} className={classes.imagemIcon}></img>
                                        </Box>
                                    </Paper>
                                    <h2 className={classes.tituloMenu}>{item.title}</h2>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </div>
        </div>


    )
}