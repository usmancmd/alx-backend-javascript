export default function updateStudentGradeByCity(students, city, newGrades) {
  const studentsByCity = students.filter((student) => student.location === city);

  const studentByGrades = studentsByCity.map((student) => {
    const updatedStudent = { ...student };
    const matchingGrade = newGrades.find((grade) => grade.studentId === student.id);

    if (matchingGrade) {
      updatedStudent.grade = matchingGrade.grade;
    } else {
      updatedStudent.grade = 'N/A';
    }

    return updatedStudent;
  });

  return studentByGrades;
}
