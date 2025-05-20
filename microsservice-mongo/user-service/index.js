const express = require('express')
const mongoose = require('mongoose')
const axios = require('axios')

const app = express()

//Conexão ao mongo atlas
const mongoUrl = "mongodb+srv://miiashirocaio1:usjt*2025@cluster0.ssvga9a.mongodb.net/orderservice?retryWrites=true&w=majority&appName=Cluster0"

mongoose.connect(mongoUrl, {
    useNewUrlParser: true, useUnifiedTopology: true
}).then(() => {
    console.log("MongoDB connected")
}).catch((err) => {
    console.log("MongoDB connection error> ", err)
})

const orderSchema = new mongoose.Schema({
    id: String,
    name: String,
    email: String,
    produto: String,
    quantidade: Number
})

const User = mongoose.model('User', orderSchema)

app.post('/usuarios', async (req, res) => {
    try {
        const usuario = req.body
        const user = new User(usuario)
        await user.save()

        /*await axios.post('http://localhost:4000/pedidos', {
            userId: usuario.id,
            produto: usuario.produto,
            quantidade: usuario.quantidade
        })*/

        res.status(200).send({ message: 'Produto Cadastrado', usuario: user })
    } catch (err) {
        res.status(500).send({ message: `Erro no sevidor. Erro: ${err}` })
    }
})

app.listen(3000, () => {
    console.log('User service running on port 3000');
});