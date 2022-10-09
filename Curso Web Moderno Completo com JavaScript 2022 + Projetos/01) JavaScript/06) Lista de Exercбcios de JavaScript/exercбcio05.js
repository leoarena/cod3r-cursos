function maiorOuIgual (numeroA, numeroB) {
    if (typeof numeroA === 'number' && typeof numeroB === 'number') return numeroA >= numeroB
    else return false
}

console.log(maiorOuIgual(0, 0))
console.log(maiorOuIgual(0, "0"))
console.log(maiorOuIgual(5, 1))