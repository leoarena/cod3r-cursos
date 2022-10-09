function multiplicarElemento (array, numero) {
    let resultado = []
    for (let i of array) {
        resultado.push(i * numero)
    }
    return resultado
}

console.log(multiplicarElemento([1, 2, 3, 4, 5], 3))