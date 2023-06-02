const bimestre1 = [8, 10, 5, 7]
const bimestre2 = [10, 10, 10, 10]
const bimestre3 = [1, 2, 4, 4]
const bimestre4 = [10, 9, 8, 7]

const todosBimestresVindosDosArrays = [bimestre1,bimestre2, bimestre3, bimestre4]

const notasDoAno = [
    [8, 10, 5, 7],
    [10, 10, 10, 10],
    [1, 2, 4, 4],
    [10, 9, 8, 7]
]


// e tem que atribuir o 0 na soma, porque se declarar somente let soma, ele vai tentar somar com algo undefined e vai retornar um NaN




for (let index = 0; index < todosBimestresVindosDosArrays.length; index++) {
    let soma = 0
    let fraseSomaNotas = `A soma das notas do bimestre ${index + 1} é: `
    let fraseMedia = `A média do bimestre é : `
    let media = 0

    for (let index2 = 0; index2 < todosBimestresVindosDosArrays[index].length; index2++) {
        soma += todosBimestresVindosDosArrays[index][index2]
        media = soma / 4
        
    }
    fraseSomaNotas += soma
    fraseMedia += media
    console.log(`A soma das notas do bimestre ${index + 1} é: ${soma}`);
    console.log(`A média do bimestre é : ${media}`);
    // console.log(fraseSomaNotas);
    // console.log(fraseMedia);
}


// console.log("\n");
// console.log("====== USANDO FOR... IN =======");
// for (let bimestre in todosBimestres) {

//     let fraseSomaNotas = `A soma das notas do bimestre ${bimestre + 1} é: `
//     let fraseMedia = `A média do bimestre é : `
//     let soma = 0
//     let media = 0
//     for (let index2 = 0; index2 < todosBimestres[bimestre].length; index2++) {
//         soma += todosBimestres[bimestre][index2]
//         media = soma / 4

//     }
//     fraseSomaNotas += soma
//     fraseMedia += media

//     console.log(fraseSomaNotas);
//     console.log(fraseMedia);

// }


// console.log("\n");
// console.log("====== USANDO FOR... OF =======");
// for (let bimestre in todosBimestres) {

//     let fraseSomaNotas = `A soma das notas do bimestre ${bimestre + 1} é: `
//     let fraseMedia = `A média do bimestre é : `
//     let soma = 0
//     let media = 0
//     for (let cadaBimestre of todosBimestres[bimestre]) {
//         soma += cadaBimestre
//         media = soma / 4

//     }
//     fraseSomaNotas += soma
//     fraseMedia += media

//     console.log(fraseSomaNotas);
//     console.log(fraseMedia);

// }


console.log("\n");
console.log("EXERCÍCIO DE FIXAÇÃO");
// --------------- EXERCÍCIO DE FIXAÇÃO ---------------
const filmes = [
    {
        titulo: 'O Auto da Compadecida',
        ano: 2000,
        diretor: 'Guel Arraes',
        elenco: [
            'Selton Mello',
            'Mateus Nachtergaele',
            'Marco Nanini',
            'Fernanda Montenegro',
        ],
    },
    {
        titulo: 'Carandiru',
        ano: 2001,
        diretor: 'Hector Babenco',
        elenco: [
            'Wagner Moura',
            'José Carlos Vasconcelos',
            'Ailton Graça',
            'Caio Blat',
        ],
    },
    {
        titulo: 'Aquarius',
        ano: 2012,
        diretor: 'Kléber Mendonça Filho',
        elenco: [
            'Sônia Braga',
            'Humberto Carrão',
            'Maeve Jinkings',
            'Bárbara Colen',
        ],
    },
]

// escreva seu código abaixo 👇🏻
console.log("FOR... OF / FOR... OF");
for (const filme of filmes) {
    let titulo = filme.titulo
    let ano = filme.ano
    let diretor = filme.diretor

    console.log("\n");
    console.log(`${titulo}, de ${ano}, dirigido por ${diretor}`);


    let controleAtores = 1
    for (const elenco of filme.elenco) {
        console.log(`Ator/Atriz ${controleAtores}: ${elenco}`);
        controleAtores++
    }
}




console.log("\n");
console.log("FOR... OF / FOR... IN");

for (const filme of filmes) {
    let titulo = filme.titulo
    let ano = filme.ano
    let diretor = filme.diretor

    console.log("\n");
    console.log(`${titulo}, de ${ano}, dirigido por ${diretor}`);

    for (const valor in filme.elenco) {
        console.log(`Ator/Atriz ${Number(valor) + 1}: ${filme.elenco[valor]}`);

    }
}





console.log("\n");
console.log("2-- FOR.. IN / FOR... OF")
//2. Altere o laço externo do programa anterior para que ele seja um for… in
for (let i in filmes) {
    let titulo = filmes[i].titulo
    let ano = filmes[i].ano
    let diretor = filmes[i].diretor
    console.log("\n");
    console.log(`${titulo}, de ${ano}, dirigido por ${diretor}`);

    //3. Altere o laço interno do programa anterior para que ele seja um for… of
    let controleAtores = 1
    for (let j of filmes[i].elenco) {
        console.log(`Ator/Atriz ${controleAtores}: ${j}`)
        controleAtores++
    }
    console.log(`\n`)
}

for (let index = 0; index < filmes.length; index++) {
    console.log(`${filmes[index].titulo}, de ${filmes[index].ano}, dirigido por ${filmes[index].diretor}`);
    
}