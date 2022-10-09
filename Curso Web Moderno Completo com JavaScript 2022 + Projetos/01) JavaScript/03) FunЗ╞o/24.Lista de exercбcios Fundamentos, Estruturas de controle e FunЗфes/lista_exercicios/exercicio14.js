function frutas (fruta) {
    switch(fruta) {
        case 'maçã':
            return 'Não vendemos esta fruta aqui'
        case 'kiwi':
            return 'Estamos com escassez de kiwis'
        case 'melância':
            return 'Aqui está, são 3 reais o quilo'
        default:
            return 'erro'
    }
}

console.log(frutas('maçã'))
console.log(frutas('kiwi'))
console.log(frutas('melância'))
console.log(frutas('alcatra'))