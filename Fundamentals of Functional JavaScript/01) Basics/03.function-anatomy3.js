// Anonymous Function

const greeter = function (name, surname) {
    return `Hello, ${name}!`
}


const greetMessage = greeter("Mark", "Smith")

console.log(greetMessage)

const greetReference = greeter
console.log(greetReference("Arthur"))