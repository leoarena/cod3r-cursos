function contarPalavras (string) {
    let palavras = string.split(" ")
    return palavras.length
}

console.log(contarPalavras("Sou uma frase"))
console.log(contarPalavras("Me divirto aprendendo a programar"))