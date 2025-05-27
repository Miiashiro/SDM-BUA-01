import React, { useState } from "react"
import axios from "axios"

export default function UserForm() {
    const [id, setId] = useState("")
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [produto, setProduto] = useState("")
    const [quantidade, setQuantidade] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const usuario = {
                id, name, email, produto, quantidade
            }

            const response = await axios.post("http://localhost:3002/usuarios", usuario)

            console.log("Usuário cadastrado:", response.data)

            setId("")
            setName("")
            setEmail("")
            setProduto("")
            setQuantidade("")
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>Cadastrar Usuário e Pedido</h2>

            <label>ID:</label>
            <input type="text" value={id} onChange={e => setId(e.target.value)} required />

            <label>Nome:</label>
            <input type="text" value={name} onChange={e => setName(e.target.value)} required />

            <label>Email:</label>
            <input type="email" value={email} onChange={e => setEmail(e.target.value)} required />

            <label>Produto:</label>
            <input type="text" value={produto} onChange={e => setProduto(e.target.value)} />

            <label>Quantidade:</label>
            <input type="number" value={quantidade} min="1" onChange={e => setQuantidade(Number(e.target.value))} />

            <button type="submit">Cadastrar</button>
        </form>
    )
}