function trocaElementos (array1, array2) {
    if (array1.length == array2.length) {
        for (let i = 0; i < array1.length; i++) {
            array1[i] = array1[i] + array2[i]
            array2[i] = array1[i] - array2[i]
            array1[i] = array1[i] - array2[i]
        }
    } else {
        return 'Vetores de tamanhos diferentes.'
    }
    return `Novo vetor A: ${array1} \nNovo vetor B: ${array2}`
}

console.log(trocaElementos([1, 2, 3], [4, 5, 6]))