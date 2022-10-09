function calcularMedia (vetor) {
    let soma = null
    let divisor = vetor.length
    for (let i of vetor) soma += i
    let resultado = soma / divisor
    return resultado
}

console.log(calcularMedia([1, 2, 3, 4, 5]))