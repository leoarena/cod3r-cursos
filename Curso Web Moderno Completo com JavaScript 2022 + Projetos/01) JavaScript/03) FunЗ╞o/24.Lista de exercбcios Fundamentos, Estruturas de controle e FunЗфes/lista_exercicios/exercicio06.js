function jurosSimples(capitalInicial, taxaJuros, tempo) {
    let resultado = (capitalInicial * taxaJuros * tempo) + capitalInicial
    return resultado
}

function jurosComposto(capitalInicial, taxaJuros, tempo) {
    let resultado = (capitalInicial * (1 + taxaJuros) ** tempo).toFixed(2)
    return resultado
}

console.log(jurosSimples(100, 0.2, 3))
console.log(jurosComposto(100, 0.2, 3))