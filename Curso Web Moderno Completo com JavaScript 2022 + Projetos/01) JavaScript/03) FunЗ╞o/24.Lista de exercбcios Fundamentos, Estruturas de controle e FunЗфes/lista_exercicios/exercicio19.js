function calcularPreco (codigo, quantidade) {
    switch (codigo) {
        case 100:
            return `R$ ${(3 * quantidade).toFixed(2)}`
        case 200:
            return `R$ ${(4 * quantidade).toFixed(2)}`
        case 300:
            return `R$ ${(5.5 * quantidade).toFixed(2)}`
        case 400:
            return `R$ ${(7.5 * quantidade).toFixed(2)}`
        case 500:
            return `R$ ${(3.5 * quantidade).toFixed(2)}`
        case 600:
            return `R$ ${(2.8 * quantidade).toFixed(2)}`
        default:
            return `Produto não existente.`
    }
}

console.log(calcularPreco(100, 2))
console.log(calcularPreco(200, 2))
console.log(calcularPreco(300, 2))
console.log(calcularPreco(400, 2))
console.log(calcularPreco(500, 2))
console.log(calcularPreco(600, 2))
console.log(calcularPreco(700, 2))