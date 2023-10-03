export default function getStudentIdsSum(array) {
  return array.reduce((accumulator, student) => {
    const studentObj = JSON.parse(JSON.stringify(student));
    return accumulator + studentObj.id;
  }, 0);
}
