function createIterator(fn, n) {
  return function (seed) {
    let result = seed;
    for (let i = 0; i < n; i++) {
      result = fn(result);
    }
    return result;
  };
}
function getDouble(n) {
  return n * 2;
}