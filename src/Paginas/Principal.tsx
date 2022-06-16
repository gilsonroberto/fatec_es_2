import { Container, Grid, Paper } from "@mui/material";
import { Box } from "@mui/system";
import menu from "../initial-state/menu";
import { useStyles } from "../MakeStyles/styles";
import AppBarReponsivo from "../components/appBar";

export default function Principal() {
    const classes = useStyles();

    const handleRedirect = (redirect: string | URL) => {
        window.location.replace(redirect);
    }

    return (
        <div>
            <header>
                <AppBarReponsivo></AppBarReponsivo>
            </header>
            <div className={classes.fundo}>
                <Container >
                    <Grid container spacing={3} className={classes.gridContainerMenu}>
                        {menu.map((item: any, key: any) => (
                            <Grid item lg={4} md={6} sm={6} xs={12} key={key}>
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