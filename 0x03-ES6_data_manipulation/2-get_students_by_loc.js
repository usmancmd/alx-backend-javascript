export default function getStudentsByLocation(students, location) {
  const studentsByLocation = students.filter((student) => {
    return student.location === location ? student : '';
  });
  return studentsByLocation;
}
