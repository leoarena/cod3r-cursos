function mostrarEmReal (valor) {
    let resultado = `R$ ${valor.toFixed(2).toString().replace('.', ',')}`
    return resultado
}

console.log(mostrarEmReal(0.30))