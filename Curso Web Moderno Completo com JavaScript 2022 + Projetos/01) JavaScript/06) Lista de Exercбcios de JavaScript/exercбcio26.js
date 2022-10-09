function removerVogais (string) {
    let vogais = ["a", "A", "e", "E", "i", "I", "o", "O", "u", "U"]
    vogais.forEach( vogal => string = string.replace(vogal, ""))
    return string
}

console.log(removerVogais("Cod3r"))
console.log(removerVogais("Fundamentos"))