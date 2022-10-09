function contarCaractere (caractere, string) {
    let resultado = null
    for (let i of string) if (i === caractere) resultado++
    return resultado
}

console.log(contarCaractere("r", "A sorte favorece os audazes"))
console.log(contarCaractere("c", "Conhece-te a ti mesmo"))