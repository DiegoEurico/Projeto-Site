import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import inicio from '../src/pages/inicio'
import NaoEncontrado from '../src/pages/NaoEncontrado'
import Login from '../src/pages/Login'
import Menu from '../src/pages/Menu'
import Tarefas from '../src/pages/Tarefas'
import RotasPrivadas from '../src/rotasPrivadas'

export default function Rotas() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={inicio} />
                <Route exact path="/login" component={Login} />
                <RotasPrivadas exact path="/menu" component={Menu} />
                <RotasPrivadas exact path="/tarefas" component={Tarefas} />
                <Route component={NaoEncontrado} />
            </Switch>
        </BrowserRouter>
    )

}