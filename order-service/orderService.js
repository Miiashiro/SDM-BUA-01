import Express from "express"

const app = Express()

app.use(Express.json())

let orders = []

app.post('/', async(req, res) => {
    const {id, product, quantity} = req.body

    if(!id || !product || !quantity) {
        return res.status(400).send({ message: "Dados do pedido inválidos"})
    }

    const newOrders = { id, product, quantity }
    orders.push(newOrders)
    res.status(201).send({message: "Pedido cadastrado com sucesso", orders: newOrders })

    //orders.push(id, product, quantity)
})

app.get('/', async(req, res) => {
    res.status(200).json(orders)
})

app.get('/pedidos/:id', async(req, res) => {
    const orderId = req.params.id
    const filteredProduct = orders.find(order => order.id === orderId)

    if(!filteredProduct) return res.status(404).send({ message: "Produto não encontrado!" })

    res.status(200).json(filteredProduct)
})

app.put('/pedidos/:id', async(req, res) => {
    const orderId = req.params.id
    const orderIndex = orders.findIndex(o => o.id === orderId)
    
    if(orderId === -1){
        return res.status(404).send({ message: "Pedido não encontrado"})
    }

    const {product, quantity} = req.body

    if(!product || !quantity){
        return res.status(400).send({ message: "Dados inválidos!"})
    }
    orders[orderIndex] = {id: orderId, product, quantity}
    res.status(200).send({ message: "Pedido atualizado com sucesso!", order: orders[orderIndex]})
})

app.delete('/pedidos/:id', async(req, res) => {
    const orderId = req.params.id
    const orderIndex = orders.findIndex(o => o.id === orderId)

    if(orderId === -1){
        return res.status(404).send({ message: "Pedido não encontrado"})
    }

    orders.splice(orderIndex, 1)
    res.status(200).send({ message: "pedido excluido com sucesso!"})
})

app.listen(4000, () => console.log("rodando na porta 4000"))