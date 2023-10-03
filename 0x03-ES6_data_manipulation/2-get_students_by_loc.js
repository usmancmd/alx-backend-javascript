export default function getStudentsByLocation(students, location) {
  const studentsByLocation = students.filter((student) => {
    student = JSON.parse(JSON.stringify(student))
    if (student.location === location) {
      return student
    }
  })
  return studentsByLocation;
}
