export default function cleanSet(set, startString) {
  if (startString === undefined || startString.length === 0) {
    return '';
  }
  const setCopy = [...set];
  const result = setCopy.filter((item) => (item !== undefined ? item.startsWith(startString) : '')).map((item) => (item !== undefined ? item.slice(startString.length) : '')).join('-');
  return result;
}
