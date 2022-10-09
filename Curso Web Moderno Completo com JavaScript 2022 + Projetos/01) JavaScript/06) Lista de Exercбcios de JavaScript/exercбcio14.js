function objetoParaArray (objeto) {
    let resultado = []
    for (let chave in objeto)
        resultado.push([ chave, objeto[chave] ])
    return resultado
}

console.log(objetoParaArray({
    nome: "Maria",
    profissao: "Desenvolvedora de Software"
}))
console.log(objetoParaArray({
    codigo: 11111,
    preco: 12000
}))