// coleção dinâmica de pares chave/valor
const produto = new Object
produto.nome = 'Cadeira'
produto['marca do produto'] = 'Genérica'
produto.preço = 220

console.log(produto)
delete produto.preço
delete produto['marca do produto']
console.log(produto)

const carro = {
    modelo: 'A4',
    valor: 89000,
    proprietário: {
        nome: 'Raul',
        idade: 56,
        endereço: {
            logradouro: 'Rua ABC',
            número: 123
        }
    },
    condutores: [{
        nome: 'Junior',
        idade: 19
    }, {
        nome: 'Ana',
        idade: 42
    }],
    calcularValorSeguro: function() {
        // ...
    }
}

carro.proprietário.endereço.número = 1000
carro['proprietário']['endereço']['logradouro'] = 'Av. Gigante'
console.log(carro)

// delete carro.condutores
delete carro.proprietário.endereço
delete carro.calcularValorSeguro
console.log(carro)
console.log(carro.condutores)
console.log(carro.condutores.length)