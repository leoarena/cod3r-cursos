function receberPrimeiroEUltimoElemento (array) {
    let primeiroElemento = array[0]
    let ultimoElemento = array[array.length - 1]
    let resultado = [primeiroElemento, ultimoElemento]
    return resultado
}

console.log(receberPrimeiroEUltimoElemento([7, 14, "olá"]))
console.log(receberPrimeiroEUltimoElemento([-100, "aplicativo", 16]))