function filtrarPorQuantidadeDeDigitos (array, quantidadeDesejada) {
    let resultado = []
    for (let item of array) {
        let quantidadeDeDigitos = String(item).length
        if (quantidadeDeDigitos === quantidadeDesejada) resultado.push(item)
    }
    return resultado
}

console.log(filtrarPorQuantidadeDeDigitos([38, 2, 365, 10, 125, 11], 2))
console.log(filtrarPorQuantidadeDeDigitos([5, 9, 1, 125, 11], 1))