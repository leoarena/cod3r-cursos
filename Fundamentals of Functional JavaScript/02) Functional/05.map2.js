const studentsAndGrades = [
    { name: "Sofie", grades: [56, 95] },
    { name: "Don", grades: [35, 77] },
    { name: "Joseph", grades: [100, 87] },
    { name: "Sara", grades: [67, 88] }
]

const getNamesOnly = student => {
    return student.name
}

const getGradesOnly = student => {
    return student.grades
}

const names = studentsAndGrades.map(getNamesOnly)
const grades = studentsAndGrades.map(getGradesOnly)

console.log(names)
console.log(grades)


const studentsStatus = studentsAndGrades.map(student => {
    return {
        ...student,
        approved: false
    }
}).map(student => {
    return {
        name: student.name,
        approved: student.approved,
        firstPeriodGrades: student.grades
    }
})

console.log(studentsStatus)