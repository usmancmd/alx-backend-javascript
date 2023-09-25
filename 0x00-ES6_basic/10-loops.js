export default function appendToEachArrayValue(array, appendString) {
  for (let idx of array) {
    const i = array.indexOf(idx);
    array[i] = appendString + idx;
  }

  return array;
}
