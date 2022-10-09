const numbers = [1, 2, 3, 4, 5, 6, 7]


// for (let index = 0; index < numbers.length; index++) {
//     const currentValue = numbers[index]
//     timesTwo.push(currentValue * 2)
// }

// console.log(`Original Array: ${numbers}`)
// console.log(`Result: ${timesTwo}`)

/*
*   currentValue:
*       The current element being processed in the array.
*   index(Optional):
*       The index of the current element being processed in the array.
*   array(Optional):
*       The array map was called upon.
*   thisArg(Optional):
*       Value to use as this when executing callback
*/

const timesTwo = numbers.map(currentValue => currentValue * 2)

console.log(timesTwo)
