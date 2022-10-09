function repertir (parametro, repeticoes) {
    let resultado = []
    for (let i = 0; i < repeticoes; i++) resultado.push(parametro)
    return resultado
}

console.log(repertir("código", 2))
console.log(repertir(7, 3))