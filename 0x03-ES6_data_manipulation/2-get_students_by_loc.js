export default function getStudentsByLocation(students, location) {
  const studentsByLocation = students.filter((student) => {
    const studentObj = JSON.parse(JSON.stringify(student));
    return studentObj.location === location ? studentObj : '';
  });
  return studentsByLocation;
}
