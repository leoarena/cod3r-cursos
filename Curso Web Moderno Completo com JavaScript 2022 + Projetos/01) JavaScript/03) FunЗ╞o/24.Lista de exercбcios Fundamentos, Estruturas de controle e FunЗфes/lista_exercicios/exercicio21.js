function planoSaude (idade) {
    if (idade < 10) return `R$ ${(100 + 80).toFixed(2)}`
    if (idade >= 10 && idade <= 30) return `R$ ${(100 + 50).toFixed(2)}`
    if (idade > 30 && idade <= 60) return `R$ ${(100 + 95).toFixed(2)}`
    if (idade > 60) return `R$ ${(100 + 130).toFixed(2)}`
}

console.log(planoSaude(8))
console.log(planoSaude(15))
console.log(planoSaude(35))
console.log(planoSaude(52))
console.log(planoSaude(80))