import Express from 'express'
//const express = require('express')
import axios from 'axios'

const app = Express()

app.use(Express.json())

app.post('/usuarios', async(req, res) => {
    const usuario = req.body

    await axios.post('http://localhost:4000/pedidos', {userId: usuario.id});

    res.send({message: `Usuario cadastrado com sucesso`, usuario})
})

app.listen(3000, () => console.log("Funcionando na porta 3000"));