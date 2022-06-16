import { Button, Container, Grid, TextField, Typography } from "@mui/material";
import Cabecalho from "../components/cabecalho";
import { useStyles } from "../MakeStyles/styles";


export default function Login() {
    const classes = useStyles();

    const handleRedirect = (redirect: string | URL) => {
        window.location.replace(redirect);
    }

    return (
        <>
            <Cabecalho></Cabecalho>
            <Container>
                <Grid container spacing={2}>
                    <Grid item lg={7}>
                        <img className={classes.imgHome} src="imagens/medicina-curso.jpg"></img>
                    </Grid>
                    <Grid item lg={5}>
                        <Grid container spacing={3} justifyContent={"center"} className={classes.gridLogin}>
                            <Grid item xs={12}>
                                <Typography color="primary" variant="h4" style={{ textAlign: "center" }}>LOGIN</Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField fullWidth label="Código">
                                </TextField>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField fullWidth label="Senha" type="password">
                                </TextField>
                            </Grid>
                            <Grid item xs={10}>
                                <Button variant="contained" fullWidth onClick={() => handleRedirect("principal")}>
                                    ENTRAR
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </>

    )
}