function somarNumeros (array) {
    let resultado = null
    for (let i of array) resultado += i
    return resultado
}

console.log(somarNumeros([10, 10, 10]))
console.log(somarNumeros([15, 15, 15, 15]))