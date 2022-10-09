function funcaoDaSorte (numero) {
    let numeroSorteado = Math.floor(Math.random() * 10 + 1)
    return numero === numeroSorteado ?
    `Parabéns! O número sorteado foi o ${numeroSorteado}.` :
    `Que pena! O número sorteado foi o ${numeroSorteado}.`
}

console.log(funcaoDaSorte(10))
console.log(funcaoDaSorte(5))
console.log(funcaoDaSorte(5))