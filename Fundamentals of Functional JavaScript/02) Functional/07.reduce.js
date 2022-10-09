const numbers = [1, 2, 3, 4, 5, 6, 7]

const mapResult = numbers.map((currentValue, currentIndex, array) => {
    return currentValue * 100
})

const initialValue = {
    even: [],
    odd: []
}
const reduceResult = numbers.reduce((accumulator, currentValue, currentIndex, array) => {
    if (currentValue % 2 == 0) {
        accumulator.even.push(currentValue)
    } else {
        accumulator.odd.push(currentValue)
    }

    return accumulator
}, initialValue)

console.log(reduceResult)

let accumulator = {
    even: [],
    odd: []
}

for (const number of numbers) {
    if (number % 2 == 0) {
        accumulator.even.push(number)
    } else {
        accumulator.odd.push(number)
    }
}

console.log(accumulator)