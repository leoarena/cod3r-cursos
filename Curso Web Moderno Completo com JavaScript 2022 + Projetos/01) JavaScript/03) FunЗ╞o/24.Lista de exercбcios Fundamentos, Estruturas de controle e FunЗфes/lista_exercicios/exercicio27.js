function crescimento (alturaA, taxaA, alturaB, taxaB) {
    if (alturaA == alturaB) {
        if (taxaA > taxaB) {
            return 'A criança "A" ultrapassará a criança "B" em 1 ano.'
        } else if (taxaA < taxaB) {
            return 'A criança "B" ultrapassará a criança "A" em 1 ano.'
        } else {
            return 'As crianças tem igual altura e crescimento.'
        }
    } else {
        if (alturaA > alturaB) {
            if (taxaA >= taxaB) {
                return 'A criança menor não ultrapassará a maior.'
            } else {
                return `A criança menor ultrapassará a maior em ${calcularTempo(alturaB, taxaB, alturaA, taxaA)} anos.`
            }
        } else {
            if (taxaA <= taxaB) {
                return 'A criança menor não ultrapassará a maior.'
            } else {
                return `A criança menor ultrapassará a maior em ${calcularTempo(alturaA, taxaA, alturaB, taxaB)} anos.`
            }
        }
    }
}

function calcularTempo (alturaMenor, taxaMenor, alturaMaior, taxaMaior) {
    let anos = null
    while (alturaMenor < alturaMaior) {
        alturaMenor += taxaMenor
        alturaMaior += taxaMaior
        anos++
    }
    return anos
}

console.log(crescimento(150, 2, 130, 4))