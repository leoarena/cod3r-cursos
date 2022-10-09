/*
    Functions that operate on other functions,
    either by taking them as arguments or by
    returning them, are called higher-order functions.
*/

const smartphone = 400
const smarTv = 500
const NY_TAX = 0.10
const DEN_TAX = 0.08

function applyTax(tax, price) {
    return (tax * price) + price
}

function applyCityTax(tax) {
    // Currying
    /*
    In mathematics and computer science,
    currying is the technique of converting 
    a function that takes multiple arguments 
    into a sequence of functions that each 
    take a single argument.
    */
    return (price) => (tax * price) + price
}

const applyNyTax = applyCityTax(NY_TAX)
const applyDenTax = applyCityTax(DEN_TAX)

const CHI_TAX = 0.06
console.log(applyCityTax(CHI_TAX)(smartphone))

console.log(applyNyTax(smartphone))
console.log(applyNyTax(smarTv))
console.log(applyDenTax(smartphone))
console.log(applyDenTax(smarTv))