function calcularAumento (plano, salarioAtual) {
    switch (plano) {
        case 'A':
            return `Novo salário: R$${salarioAtual * 1.1}`
        case 'B':
            return `Novo salário: R$${salarioAtual * 1.15}`
        case 'C':
            return `Novo salário: R$${salarioAtual * 1.2}`
        default:
            return `Plano inválido.`
    }
}

console.log(calcularAumento('A', 1000))
console.log(calcularAumento('B', 1000))
console.log(calcularAumento('C', 1000))
console.log(calcularAumento('D', 1000))