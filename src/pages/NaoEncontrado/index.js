import React from 'react'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core/styles'
import SentimentVeryDissatisfiedIcon from'@material-ui/icons/SentimentVeryDissatisfied'

const useStyles = makeStyles(theme => ({
    paper: {
        margin: theme.spacing(10),
        padding: theme.spacing(5),
        alignItems: 'center'
    },
    botao: {
        marginTop: theme.spacing(10)
    }
}))
export default function NaoEncontrado(){
    const classes = useStyles() // estilos no material-UI
    return (
        <Paper elevation={3} className={classes.paper}>
            <Typography variant="h3" color="primary">
                <SentimentVeryDissatisfiedIcon fontSize='large' />
                Página Não Encontrada!
            </Typography>
            <Button className={classes.botao}
            href="/"
            variant="contained"
            color="primary">Voltar para o Início</Button>
        </Paper>
    )
}