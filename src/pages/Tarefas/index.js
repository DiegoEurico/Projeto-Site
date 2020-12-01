// cSpell:Ignore descriçao
import React from 'react'
import { useState, useEffect } from 'react'
import { Grid, Typography, TextField, FormControl, InputLabel, Select, MenuItem, Button, Paper } from '@material-ui/core'

import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core'

import SaveIcon from '@material-ui/icons/Save'
import EditIcon from '@material-ui/icons/Edit'
import DeleteIcon from '@material-ui/icons/Delete'

import Menu from '../Menu'

export default function Tarefas() {
    const [tarefas, setTarefas] = useState([])
    const valorInicial = { id: '', tipo: '', descriçao: '', dataFim: '' }
    const [tarefa, setTarefa] = useState(valorInicial) //hook
    const [editando, setEditando] = useState(false)
    const hoje = new Date().toISOString().slice(0,10)
    
    useEffect(() => {
        setTarefas(JSON.parse(localStorage.getItem('tarefas')))
    }, [])

    useEffect(() => {
        function salvaDados() {
            localStorage.setItem('tarefas', JSON.stringify(tarefas))
        }
        salvaDados()
    }, [tarefas])

    function mudaAtributo(event) {
        const { name, value } = event.target
        setTarefa({ ...tarefa, [name]: value })
    }

    const apagaRegistro = id => {
        let index = tarefas.map((tarefa) => tarefa.id).indexOf(id);
        if(index > -1){
            tarefas.splice(index, 1) // o 1o parâmetro é o índice do array e o segundo é o o numero de itens que serão removidos
            setTarefas(tarefas.filter(tarefa => tarefa.id !== id))
        }

    }

    function salvaRegistro(event) {
        event.preventDefault() //Não recarrega a página
        if(editando){
            apagaRegistro(tarefa.id)
        }
        setTarefa({ id: tarefa.id, tipo: tarefa.tipo, descricao: tarefa.descricao, dataFim: tarefa.dataFim })
        setTarefas([...tarefas, tarefa])
        setTarefa(valorInicial) // Limpa os campos
        setEditando(false)
    }

    function converteData(data){
        return new Date(data).toLocaleDateString('pt-BR',{timeZone: 'UTC'})
    }

    return (
        <>
            <Menu />
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <form onSubmit={salvaRegistro}>
                        <Typography component="h1" align="center">
                            Cadastro de Funcionários
                        </Typography>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required fullWidth 
                            type="number" id="id" name="id"
                            label="Nº de Registro" autoFocus
                            value={tarefa.id}
                            onChange={mudaAtributo}
                            disabled={editando}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required fullWidth
                            type="text" id="descricao" name="descriçao"
                            label="Nome do Funcionário"
                            value={tarefa.descricao}
                            onChange={mudaAtributo}                            
                        />
                        <FormControl fullWidth={true}>
                            <InputLabel id="tipo">Cargo</InputLabel>
                            <Select
                                LabelId="tipo"
                                id="tipo"
                                value={tarefa.tipo}
                                required
                                onChange={e => setTarefa({ ...tarefa, tipo: e.target.value })}
                            >
                                <MenuItem value="Web Designer">Web Designer</MenuItem>
                                <MenuItem value="Programador">Programador</MenuItem>
                                <MenuItem value="Analista de Sistemas">Analista de Sistemas</MenuItem>
                            </Select>
                        </FormControl>
                        <TextField
                            variant="outlined" margin="normal"
                            required fullWidth id="dataFim" name="dataFim"
                            label="Data da Contratação" type="date"
                            value={tarefa.dataFim} onChange={mudaAtributo}
                            inputProps={{min: hoje}}
                            InputLabelProps={{
                                shrink: true
                            }}
                        />
                        <Button type="submit"
                            variant="contained"
                            color="primary">
                            <SaveIcon /> Salvar </Button>
                    </form>
                </Grid>
                <Grid item xs={12} md={6}>
                    <TableContainer component={Paper}>
                        <Table aria-label="Relação de Tarefas">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Nº de Registro</TableCell>
                                    <TableCell>Cargo</TableCell>
                                    <TableCell>Nome do Funcionário</TableCell>
                                    <TableCell align="right">Data da Contratação</TableCell>
                                    <TableCell>Opções</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {tarefas.map((t) => (
                                    <TableRow key={t.id}>
                                        <TableCell> {t.id} </TableCell>
                                        <TableCell> {t.tipo} </TableCell>
                                        <TableCell> {t.descricao} </TableCell>
                                        <TableCell align="right"> {converteData(t.dataFim)} </TableCell>
                                        <TableCell>
                                            <Button startIcon={<DeleteIcon />}
                                                onClick={() => apagaRegistro(t.id)}
                                                variant="outlined"
                                                color="secondary">
                                                Apagar
                                            </Button>

                                            <Button startIcon={<EditIcon />}
                                                onClick={() => {
                                                    setTarefa(t)
                                                    setEditando(true)
                                                }} variant="outlined" color="primary">
                                                    Editar
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
            </Grid>
        </>
    )
}