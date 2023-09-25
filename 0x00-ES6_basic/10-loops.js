export default function appendToEachArrayValue(array, appendString) {
  for (const idx of array) {
    cnst i = array.indexOf(idx);
    array[i] = appendString + idx;
  }

  return array;
}
