function calcularSalarioLiquido (horasTrabalhadas, valorPorHora) {
    salarioLiquidoMensal = ((horasTrabalhadas * valorPorHora) * 0.7).toFixed(2)
    return `Salário líquido é igual a R$${salarioLiquidoMensal}`
}

console.log(calcularSalarioLiquido(180, 60))