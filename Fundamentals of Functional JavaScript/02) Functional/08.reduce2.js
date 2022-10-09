// Quick Exercise!
/*
Groceries List
- Apples
- Bananas
- Grapes
- Oranges
*/
// Quick exercise part 2
const fruits = [
    { name: "Apples",  price: 10 },
    { name: "Bananas", price: 5  },
    { name: "Grapes",  price: 8  },
    { name: "Oranges", price: 9  }
]

const groceriesList = fruits.reduce((accumulator, currentFruit, index) => {
    return accumulator + currentFruit.price
}, 0)

console.log(groceriesList)