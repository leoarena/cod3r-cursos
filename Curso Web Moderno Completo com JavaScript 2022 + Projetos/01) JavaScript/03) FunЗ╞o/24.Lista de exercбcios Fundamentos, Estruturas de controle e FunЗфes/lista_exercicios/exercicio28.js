function paresOuImpares (numeros) {
    let pares = null
    let impares = null
    for (let i = 0; i < numeros.length; i++) {
        numeros[i] % 2 == 0 ? pares++ : impares++
    }
    return `${pares} números pares e ${impares} números ímpares.`
}

console.log(paresOuImpares([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]))