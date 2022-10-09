function avaliaPontuacoes (stringPontuacoes) {
    let pontuacoes = stringPontuacoes.split(', ')
    let recordes = null
    let piorJogo = 1
    let maior = pontuacoes[0]
    let menor = pontuacoes[0]

    for (let i = 1; i < pontuacoes.length; i++) {
        if (pontuacoes[i] > maior) {
            maior = pontuacoes[i]
            recordes++
        } else if (pontuacoes[i] < menor) {
            menor = pontuacoes[i]
            piorJogo = i + 1
        }
    }
    return [recordes, piorJogo]
}

console.log(avaliaPontuacoes("30, 40, 20, 4, 51, 25, 42, 38, 56, 0"))
console.log(avaliaPontuacoes("10, 20, 20, 8, 25, 3, 0, 30, 1"))