let vetorPilha = [1, 2, 3, 4, 5]
let vetorAdiciona = [6, 7, 8, 9, 10]

function adicionaVetor (vetorA, vetorB) {
    for (let i = 0; i < vetorB.length; i++) {
        console.log(vetorB[i])
        vetorA.push(vetorB[i])
    }
    return `Vetor adicionado: ${vetorB} \nVetor resultado: ${vetorA}`
}

console.log(adicionaVetor(vetorPilha, vetorAdiciona))