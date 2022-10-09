function somenteParesEntre1e100 () {
    let pares = []
    let impares = []
    for (let i = 1; i <= 100; i++) {
        i % 2 == 0 ? pares.push(i) : impares.push(i)
    }
    return pares
}

console.log(somenteParesEntre1e100())