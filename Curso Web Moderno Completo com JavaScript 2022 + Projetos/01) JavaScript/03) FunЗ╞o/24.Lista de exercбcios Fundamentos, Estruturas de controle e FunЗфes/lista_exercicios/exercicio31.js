function contarNegativos (vetor) {
    let contador = null
    for (let i of vetor) {
        if (i < 0) contador++
    }
    return contador
}

console.log(contarNegativos([10, 5, -7, 3, -1, 3, -11, -20, 6, 9]))