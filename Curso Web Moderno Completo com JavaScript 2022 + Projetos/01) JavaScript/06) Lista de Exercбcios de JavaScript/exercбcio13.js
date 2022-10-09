function filtrarNumeros (array) {
    let resultado = []
    for (let i of array) if (typeof i == "number") resultado.push(i)
    return resultado
}

console.log(filtrarNumeros(["Javascript", 1, "3", "Web", 20]))
console.log(filtrarNumeros(["a", "c"]))