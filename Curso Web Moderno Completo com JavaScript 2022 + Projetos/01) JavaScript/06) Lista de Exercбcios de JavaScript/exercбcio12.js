function removerPropriedade (objeto, propriedade) {
    let copia = objeto
    delete copia[propriedade]
    return copia
}

console.log(removerPropriedade({a: 1, b: 2}, "a"))
console.log(removerPropriedade({
    id: 20,
    nome: "caneta",
    descriçao: "Não preenchido"
}, "descriçao"))