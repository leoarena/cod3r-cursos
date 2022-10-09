function calculadora (valorA, operacao, valorB) {
    switch (operacao) {
        case '+':
            return valorA + valorB
        case '-':
            return valorA - valorB
        case '*':
            return valorA * valorB
        case '/':
            return valorA / valorB
        default:
            return 'Operação inválida'
    }
}

console.log(calculadora(2, '+', 3))
console.log(calculadora(2, '-', 3))
console.log(calculadora(2, '*', 3))
console.log(calculadora(2, '/', 3))
console.log(calculadora(2, 'a', 3))