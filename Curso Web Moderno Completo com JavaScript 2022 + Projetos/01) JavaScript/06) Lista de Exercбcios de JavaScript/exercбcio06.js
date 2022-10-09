function inverso (parametro) {
    if (typeof parametro == 'boolean') return !parametro
    else if (typeof parametro == 'number') return -parametro
    else return `Booleano ou número esperados, mas o parâmetro é do tipo ${typeof parametro}.`
}

console.log(inverso(true))
console.log(inverso("6"))
console.log(inverso(-2000))
console.log(inverso("programação"))