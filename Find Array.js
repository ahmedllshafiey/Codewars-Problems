function findArray(arr1, arr2) {
  return !arr1.length || !arr2.length ? [] : arr2.map((n) => arr1[n]);
}
