const resposta = Number(prompt("Digite um número"))
const montandoTabuada = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

console.log("=====FOR...IN=====");
for (let key in montandoTabuada) {

    console.log((Number(key) + 1) * resposta);

}
console.log("=====FOR...OF=====");
for (const multiplicador of montandoTabuada) {
    console.log(multiplicador * resposta)
}

for (let index = 1; index <= 10; index++) {
    console.log(index * resposta)
    
}