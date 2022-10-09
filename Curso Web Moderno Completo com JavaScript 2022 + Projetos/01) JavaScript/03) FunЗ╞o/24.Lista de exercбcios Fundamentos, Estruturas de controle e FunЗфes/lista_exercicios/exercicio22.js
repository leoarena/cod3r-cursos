function calcularAnuidade (mes, valor) {
    let mesesDeAtraso = null
    let jurosCompostos5 = 5/100
    if (mes > 0 && mes < 13) {
    mesesDeAtraso = mes - 1
    return `R$ ${(valor * ((1 + jurosCompostos5) ** mesesDeAtraso)).toFixed(2)}`
    } else {
        return "Mês inválido."
    }
}

console.log(calcularAnuidade(4, 100))