import { Container, Grid, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useStyles } from "../MakeStyles/styles";

export default function Cabecalho(){
    const classes = useStyles();
    return (
        <header>
        <Box p={2.5} className={classes.boxCabecalho}>
          <Grid container className={classes.gridCabecalho}>
            <Grid item xs={12}>
              <Typography variant="body2" color="primary"  textAlign="center">
              Ambiente seguro
              </Typography>
            </Grid>
          </Grid>
          </Box>
      </header>
    );
}