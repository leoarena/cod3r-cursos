function cedulas (valor) {
    let notasDe100 = 0
    let notasDe50 = 0
    let notasDe10 = 0
    let notasDe5 = 0
    let notasDe1 = 0
    let valorNota = calcularValorNota(valor)
    while (valor >= valorNota) {
        switch (valorNota) {
            case 100:
                valor -= 100
                notasDe100++
                break
            case 50:
                valor -= 50
                notasDe50++
                break
            case 10:
                valor -= 10
                notasDe10++
                break
            case 5:
                valor -= 5
                notasDe5++
                break
            case 1:
                valor -= 1
                notasDe1++
                break
        }

        valorNota = calcularValorNota(valor)

    }
    return elaborarResultado(notasDe100, notasDe50, notasDe10, notasDe5, notasDe1)
}

function calcularValorNota(valor) {
    if (valor >= 100) return 100
    else if (valor >= 50) return 50
    else if (valor >= 10) return 10
    else if (valor >= 5) return 5
    else if (valor >= 1) return 1
}

function elaborarResultado(notasDe100, notasDe50, notasDe10, notasDe5, notasDe1) {
    let resultado = ''
    if (notasDe100 > 0) resultado += `${notasDe100} nota(s) de R$ 100. `
    if (notasDe50 > 0) resultado += `${notasDe50} notas(s) de R$ 50. `
    if (notasDe10 > 0) resultado += `${notasDe10} notas(s) de R$ 10. `
    if (notasDe5 > 0) resultado += `${notasDe5} notas(s) de R$ 5. `
    if (notasDe1 > 0) resultado += `${notasDe1} notas(s) de R$ 1. `
    return resultado
}

console.log(cedulas(18))
console.log(cedulas(153))