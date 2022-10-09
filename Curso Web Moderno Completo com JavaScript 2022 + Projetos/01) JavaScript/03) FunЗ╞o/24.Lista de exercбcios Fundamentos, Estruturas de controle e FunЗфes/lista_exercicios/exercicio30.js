function maiorEmenor (vetor) {
    let maior = vetor[0]
    let menor = vetor[0]
    for (let item of vetor) {
    item > maior ? maior = item : maior = maior
    item < menor ? menor = item : menor = menor
    }
    return `Maior: ${maior} \nMenor: ${menor}`
}

console.log(maiorEmenor([10, 5, 7, 3, 1, 3, 11, 20, 6, 9]))