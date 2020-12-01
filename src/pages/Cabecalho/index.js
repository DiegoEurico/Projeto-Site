// cSpell:Ignore Cabecalho, secoes, serviços , secao
import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import ApartmentIcon from '@material-ui/icons/Apartment'
import Typography from '@material-ui/core/Typography'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
    toolbarTitle: {
        flex: 1
    },
    toolbarSecundaria: {
        justifyContent:
            'space-between'
    },
    toolbarLink: {
        padding: theme.spacing(1)
    },
}))

const Cabecalho = () => {
    const titulo = 'Empresa Delta'
    const secoes = [
        { titulo: 'Produtos', url: '/produtos' },
        { titulo: 'Serviços', url: '/serviços' },
        { titulo: 'SAC', url: '/sac' },
        { titulo: 'FAQ', url: '/faq' },
        { titulo: 'Area reservada', url: '/login' },
    ]
    const classes = useStyles()
    const history = useHistory()
    return (
        <>
            <AppBar position='relative'>
                <Toolbar>
                    <ApartmentIcon />
                    <Typography
                        component="h1"
                        color="inherit"
                        align="center"
                        noWrap
                        className={classes.toolbarTitle}
                    >
                        {titulo}
                    </Typography>
                    {localStorage.getItem("logado") !== btoa(process.env.REACT_APP_USER)
                        ? <Button variant="contained"
                            color="secondary"
                            size="small"
                            href="/Login">
                            Login
                    </Button>
                        : <Button variant="contained"
                            color="primary"
                            size="small"
                            onClick={() => {
                                localStorage.removeItem("logado")
                                history.push("/login")
                            }}
                        > Logout</Button>
                    }
                </Toolbar>
            </AppBar>
            {
                <Toolbar component="nav" variant="dense" className={classes.toolbarSecundaria}>
                    {secoes.map((secao) => (
                        <Link
                            color="secondary"
                            variant='body3'
                            noWrap
                            key={secao.titulo}
                            href={secao.url}
                            className={classes.toolbarLink}
                        >
                            {secao.titulo}
                        </Link>

                    ))}
                </Toolbar>
            }
        </>
    )
}

export default Cabecalho