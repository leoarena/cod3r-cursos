function revenda (veiculo) {
    switch (veiculo) {
        case 'sedan':
        case 'motocicleta':
        case 'caminhonete':
            return 'Tem certeza que não prefere este modelo?'
        case 'hatch':
            return 'Compra efetuada com sucesso.'
        default:
            return 'Não trabalhamos com este tipo de automóvel aqui.'
    }
}

console.log(revenda('hatch'))
console.log(revenda('motocicleta'))
console.log(revenda('sedan'))
console.log(revenda('caminhonete'))
console.log(revenda('jetski'))