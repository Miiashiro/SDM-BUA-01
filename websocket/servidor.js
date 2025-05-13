const express = require('express')
const http = require('http')
const cors = require('cors')
const socketIo = require('socket.io')

//Para utilizar métodos HTTP
const app = express()

//Cria uma instância de http
const server = http.createServer(app)

//Fica observando/escuta se há alguma chamada na porta
app.use(cors())

//Transforma em json as mensagens recebidas
app.use(express.json())

const io = socketIo(server, {
    cors: {
        origin: '*',
        methods: ['GET', 'POST', 'PUT', 'DELETE']
    }
})

let usuarios = []
let pedidos = []

io.on('connection', (socket) => {
    console.log("Cliente conectado via websocket")

    //Quando o cliente se desconecta
    socket.on('disconnect', () => {
        console.log("CLiente desconectado")
    })
})

app.post('/usuarios', (req, res) => {
    const usuario = req.body

    usuarios.push(usuario)

    io.emit('usuarios', usuario)

    res.status(200).json({ message: `Usuario cadastrado com sucesso`})
})

app.post('/pedidos', (req, res) => {
    const pedido = req.body

    pedidos.push(pedido)

    pedido.id = Date.now()

    io.emit('pedidos', pedido)

    res.status(200).json({ message: `Pedido cadastrado com sucesso`})
})

app.get('/dados', (req, res) => {
    res.status(200).json(pedidos, usuarios)
})

server.listen(3000, () => {
    console.log("Servidor conectado na porta 3000")
})