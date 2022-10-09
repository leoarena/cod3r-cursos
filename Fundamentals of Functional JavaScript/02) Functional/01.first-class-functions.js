/*
    A programming language is said to have
    First-class functions when functions in 
    that language are treated like any other 
    variable.

    First-class functions can be:
    - Assigned as a value to a variable.
    - Passed as an argument to other functions
    - Returned by another function
*/

function add(a, b) {
    return a + b
}

const addOperation = add

console.log(add(2, 2))
console.log(addOperation(2, 2))