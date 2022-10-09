function receberSomenteParesDeIndicesPares (array) {
    let resultado = []
    for (let i in array) if (i % 2 == 0 && array[i] % 2 == 0) resultado.push(array[i])
    return resultado
}

console.log(receberSomenteParesDeIndicesPares([1, 2, 3, 4]))
console.log(receberSomenteParesDeIndicesPares([10, 70, 22, 43]))