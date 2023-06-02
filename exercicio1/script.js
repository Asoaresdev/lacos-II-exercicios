const arrayStrings = ["cachorro", "gato", "papagaio"]

const arrayNumbers = [10, 20, 30]

const arrayDeGols = [
    [27, 4, 20, 13, 14],
    [11, 15, 12, 8, 9],
    [5, 5, 12, 16, 4],
    [20, 33, 11, 12, 19],
    [3, 3, 4, 5, 10]
]


console.log("\n====FOR / FOR ====");
for (let index = 0; index < arrayDeGols.length; index++) {
    
    let frase = `Jogador ${Number(index) + 1}: `
    for (let j = 0; j < arrayDeGols[index].length; j++) {
        frase += ` ${arrayDeGols[index][j]},`  
    }
    console.log(frase.slice(0, -1))
    
}
console.log("\n====FOR / FOR (outra forma de montar frase)====");
for (let index = 0; index < arrayDeGols.length; index++) {
    
    let contador = ""
    for (let j = 0; j < arrayDeGols[index].length; j++) {
        contador += ` ${arrayDeGols[index][j]},`
    }
    console.log(`Jogador ${Number(index) + 1}: ${contador} `)
}


console.log("\n====FOR / FOR...OF ====");
for (let index = 0; index < arrayDeGols.length; index++) {
    let frase = `Jogador ${Number(index) + 1}: `
    for (let gols of arrayDeGols[index]) {
        frase += ` ${gols},`
    }
    console.log(frase)
}

//forma bem gambiarra
console.log("\n====FOR... OF / FOR...OF ====");
let variavelControle = 0
for (let index of arrayDeGols) {
    let frase = `Jogador ${variavelControle + 1}: `
    for (let gols of arrayDeGols[variavelControle]) {
        frase += ` ${gols},`
    }
    variavelControle++
    console.log(frase)
}


// outra mnaneira, com for in e for of
console.log("\n====FOR...IN / FOR...OF ====");
for (let i in arrayDeGols) {
    let frase = `Jogador ${Number(i) + 1}: `

    for (let j of arrayDeGols[i]) {
        frase = frase + ` ${j},`
    }
    console.log(frase)
}

//NÃO É EXATAMENTE O QUE O EXERCÍCIO PEDE PORQUE PEDE PARA ITERAR NOS DOIS ARRAYS
console.log("\n====SOMENTE UM FOR PURO ====");

for (let i = 0; i < arrayDeGols.length; i++) {
    console.log(`Jogador ${[i + 1]}: ${arrayDeGols[i]}`)

}
console.log("====Testes====");
console.log("\n====COM FOREACH====");
for (const indice in arrayDeGols) {
    let frase = `Jogador ${Number(indice) + 1}: `
    arrayDeGols[indice].forEach(element => frase += `${element}, `);
    console.log(frase);
}



console.log("\n====== FOR EM STRING======");
const stringPalavra = "bananinha"


for (let index = 0; index < stringPalavra.length; index++) {
    console.log(stringPalavra[index]);;
    
}
console.log("\n====== FOR...OF EM STRING======");
for (const iterator of stringPalavra) {
    console.log(iterator);
    
}

console.log("\n====== FOR...IN EM OBJETO======");
const objetoNome ={
    "nome1": "jose",
    "nome2": "maria",
    "nome3": "Fulana"
}

for (const key in objetoNome) {
    console.log(objetoNome[key]);
}

