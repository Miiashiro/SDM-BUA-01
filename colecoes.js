let lista = new Map()

lista.set("nome", "Danilo")
lista.set("idade", 40)
lista.set("altura", 2.10)

//responde o valor
console.log(lista.get("nome"))

//responde se existe o campo idade
console.log(lista.has("idade"))

//mostra quantos campos existem no array
console.log(lista.size)


lista.forEach((valor, chave) => {
    console.log(`${chave}: ${valor}`)
})


lista.delete("idade");

console.log("-----------------------------------------")

lista.forEach((valor, chave) => {
    console.log(`${chave}: ${valor}`)
})