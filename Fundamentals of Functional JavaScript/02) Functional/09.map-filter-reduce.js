const studentsAndGrades = [
    { name: "Sofie", grades: [56, 95] },
    { name: "Don", grades: [35, 77] },
    { name: "Joseph", grades: [100, 87] },
    { name: "Sara", grades: [67, 88] }
]

// 1. Add a boolean property called approved to each object
// 2. Replace the "grades" property for "gpa", calculate and assign each student's gpa
// 3. Set approved value to true if the student gpa is greater than 70
// 4. Print the students with their respective gpas and whether they were approved or not
// 5. Print only the approved students

// 1#
const createApprovedProp = student => {
    return { ...student, approved: false }
}

// 2#
const createGPAProp = student => {
    const sum = (accumulator, currentGrade) => {
        return accumulator + currentGrade
    }

    const gradesSum = student.grades.reduce(sum, 0)

    return {
        name: student.name,
        gpa: gradesSum / student.grades.length
    }
}

// 3#
const setApproved = student => {
    return {
        ...student,
        approved: student.gpa > 70
    }
}

const result = studentsAndGrades.map(createApprovedProp).map(createGPAProp).map(setApproved)

console.log(result)

// 5#

const approvedOnly = student => student.approved
const approvedStudents = result.filter(approvedOnly)

console.log(approvedStudents)