function calcularMedia (array) {
    let total = null
    let divisor = array.length
    for (let i of array) total += i
    return total / divisor
}

console.log(calcularMedia([0, 10]))
console.log(calcularMedia([1, 2, 3, 4, 5]))