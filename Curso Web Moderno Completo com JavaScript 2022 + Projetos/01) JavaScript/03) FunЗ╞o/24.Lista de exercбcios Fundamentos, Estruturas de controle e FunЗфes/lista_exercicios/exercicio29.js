function intervalo (vetor) {
    let dentro = null
    let fora = null
    for (let i = 0; i < vetor.length; i++) {
        vetor[i] >= 10 && vetor[i] <= 20 ? dentro++ : fora++
    }
    return `${dentro} dentro e ${fora} fora.`
}

console.log(intervalo([ 7, 8, 9, 10, 11, 12, 16, 17, 18, 19, 20, 21]))