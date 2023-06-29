function maxAndMin(arr1, arr2) {
  let result = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let k = 0; k < arr2.length; k++) {
      let element = Math.abs(arr1[i] - arr2[k]);
      result.push(element);
    }
  }
  return [Math.max(...result), Math.min(...result)];
}