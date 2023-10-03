export default function getListStudentIds(array) {
  if (!Array.isArray(array)) {
    return [];
  }
  const ids = [];
  for (const student of array) {
    ids.push(student.id);
  }
  return ids;
}
