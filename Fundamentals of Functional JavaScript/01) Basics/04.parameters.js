const range = (start, end) => {
    if(start && end) {
        for (let index = start; index <= end; index++) {
        console.log(index)
        }
    } else {
        console.log("Missing Parameter!")
    }
}

range(5, 10)

const print = message => console.log(message)

print("Hello!")