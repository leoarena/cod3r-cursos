function buscarPalavrasSemelhantes (palavra, array) {
    let resultado = []
    for (let i of array) if (i.includes(palavra)) resultado.push(i)
    return resultado
}

console.log(buscarPalavrasSemelhantes("pro", ["programação", "mobile", "profissional"]))
console.log(buscarPalavrasSemelhantes("java", ["javascript", "java", "c++"]))