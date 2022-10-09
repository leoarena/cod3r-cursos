const studentsAndGrades = [
    { name: 'Sofie', approved: true, firstPeriodGrades: [ 56, 95 ] },
    { name: 'Don', approved: false, firstPeriodGrades: [ 35, 77 ] },
    { name: 'Joseph', approved: true, firstPeriodGrades: [ 100, 87 ] },
    { name: 'Sara', approved: true, firstPeriodGrades: [ 67, 88 ] }
  ]

  const approvedStudentsOnly = student => student.approved == true
  const startingWithSOnly = student => student.name[0] == 'S'
  const approvedStudents = studentsAndGrades.filter(approvedStudentsOnly)
  const startsWithS = studentsAndGrades.filter(startingWithSOnly)

  console.log(approvedStudents)
  console.log(startsWithS)