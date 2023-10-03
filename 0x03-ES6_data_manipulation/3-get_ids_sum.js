export default function getStudentIdsSum(array) {
  return array.reduce((accumulator, student) => accumulator + student.id, 0);
}
