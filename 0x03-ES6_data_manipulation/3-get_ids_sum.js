export default function getStudentIdsSum(array) {
  return array.reduce((accumulator, student) => {
    student = JSON.parse(JSON.stringify(student));
    return accumulator + student.id;
  }, 0);
}
