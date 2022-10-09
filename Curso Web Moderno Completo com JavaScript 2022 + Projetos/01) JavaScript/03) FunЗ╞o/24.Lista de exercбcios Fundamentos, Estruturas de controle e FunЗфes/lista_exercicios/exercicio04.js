function divisao (dividendo, divisor) {
    let resultado = Math.floor(dividendo / divisor)
    let resto = dividendo % divisor
    if (resto != 0) {
        return `Resultado: ${resultado} \n Resto: ${resto}`
    } else {
        return `Resultado: ${resultado}`
    }
}

console.log(divisao(11, 4))