function tipoTriangulo (ladoA, ladoB, ladoC) {
    if (ladoA == ladoB && ladoB == ladoC) return 'Equilátero'
    if (ladoA == ladoB || ladoA == ladoC || ladoB == ladoC) return 'Isósceles'
    if (ladoA != ladoB && ladoA != ladoC && ladoB != ladoC) return 'Escaleno'
}

console.log(tipoTriangulo(2, 2, 2))
console.log(tipoTriangulo(1, 1, 3))
console.log(tipoTriangulo(1, 2, 3))