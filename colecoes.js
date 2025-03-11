let frutas = ["Morango", "Cacau", "Amora"]


frutas.forEach((fruta, index) => {
    console.log(`${index + 1}: ${fruta}`)
})

//Adiciona
frutas.push("Maçã")

//Remove
//frutas.pop()

frutas.splice(1,1)

console.log(frutas)