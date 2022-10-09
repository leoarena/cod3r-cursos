function greet(name = "John", lastname = "Doe", suffix = "III") {

    console.log(`Hello ${name} ${lastname} ${suffix}`)
}

greet()
greet("Mark")
greet("Mark", "Smith")
greet("Mark", "Smith", "Jr")

function getAverageGrade(...grades) {
    let sum = null

    for (const grade of grades){
        sum += grade
    }
    console.log(sum / grades.length)
}

getAverageGrade(100, 86, 75, 88, 22)