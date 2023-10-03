export default function hasValuesFromArray(set, array) {
  let trueOrFalse = true;
  for (const i of array) {
    if (!set.has(i)) {
      trueOrFalse = false;
    }
  }
  return trueOrFalse;
}
