export default function getStudentsByLocation(students, location) {
  const studentsByLocation = [];
  for (const student of students) {
    if (student.location === location) {
      studentsByLocation.push(student);
    }
  }
  return studentsByLocation;
}
