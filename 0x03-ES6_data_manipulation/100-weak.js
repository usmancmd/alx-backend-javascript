export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  const maximumEndpointCalls = 5;
  let calledTimes = 0;
  if (weakMap.get(endpoint)) {
    calledTimes = weakMap.get(endpoint);
  }
  weakMap.set(endpoint, calledTimes + 1);
  if (calledTimes + 1 >= maximumEndpointCalls) {
    throw new Error('Endpoint load is high');
  }
}
