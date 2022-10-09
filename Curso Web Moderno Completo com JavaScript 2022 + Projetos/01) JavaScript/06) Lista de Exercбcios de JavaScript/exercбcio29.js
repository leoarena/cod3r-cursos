function segundoMaior (array) {
    let indiceDoMaior = 0
    let segundoMaior

    array.forEach((item, indice) => {
        if (item > array[indiceDoMaior]) indiceDoMaior = indice
    })

    array.splice(indiceDoMaior, 1)
    segundoMaior = array[0]

    array.forEach(item => {
        if (item > segundoMaior) segundoMaior = item
    })

    return segundoMaior
}

console.log(segundoMaior([12, 16, 1, 5]))
console.log(segundoMaior([8, 4, 5, 6]))