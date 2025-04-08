import Express from "express"

const app = Express()

app.use(Express.json())

app.post('/pedidos', (req, res) => {
    const pedido = req.body

    console.log(pedido)

    res.send({message: `Pedido recebido`})
})

app.listen(4000, () => console.log("rodando na porta 4000"))