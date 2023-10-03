export default function getListStudentIds(array) {
  if (!Array.isArray(array)) {
    return [];
  }
  const ids = array.map((student) => {
    //const obj = JSON.parse(JSON.stringify(student));
    return student.id;
  });
  return ids;
}
