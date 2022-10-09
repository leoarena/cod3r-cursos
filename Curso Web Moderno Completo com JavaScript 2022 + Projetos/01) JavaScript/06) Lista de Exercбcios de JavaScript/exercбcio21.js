function menorNumero (array) {
    let menor = array[0]
    for (let i of array) i < menor ? menor = i : menor = menor
    return menor
}

console.log(menorNumero([10, 5, 35, 65]))
console.log(menorNumero([5, -15, 50, 3]))