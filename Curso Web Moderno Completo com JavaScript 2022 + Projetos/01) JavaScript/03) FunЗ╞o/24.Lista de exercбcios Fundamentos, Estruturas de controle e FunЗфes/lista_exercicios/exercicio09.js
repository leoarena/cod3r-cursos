function notas (nota) {
    let notaArredondada = arredondar(nota)

    function arredondar(nota) {
        if (nota < 38) {
            return nota
        } else if (nota % 5 > 2) {
            return nota + (5 - (nota % 5))
        } else return nota
    }

    if (notaArredondada < 40) return `Reprovado com ${notaArredondada}`
    else return `Aprovado com ${notaArredondada}`
}

console.log(notas(100))
console.log(notas(30))
console.log(notas(38))
console.log(notas(88))
console.log(notas(61))