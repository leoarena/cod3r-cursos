/*
    Functions that operate on other functions,
    either by taking them as arguments or by
    returning them, are called higher-order functions.
*/

function add(a, b) {
    console.log(`Performing ${a} + ${b}`)
    return a + b
}

function subtract(a, b) {
    console.log(`Performing ${a} - ${b}`)
    return a - b
}

function multiply(a, b) {
    console.log(`Performing ${a} * ${b}`)
    return a * b
}

function run(operation, a, b) {
    const result = operation(a, b)
    console.log(`The result is: ${result}`)
}

run(add, 2, 2)
run(subtract, 2, 2)
run(multiply, 10, 5)


run((a, b) => {
    console.log(`Performing ${a} / ${b}`)
    return a / b
}, 10, 2)