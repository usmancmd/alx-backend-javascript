export default function getStudentsByLocation(students, location) {
  const studentsByLocation = students.filter((student) => (student.location === location ? student : ''));
  return studentsByLocation;
}
