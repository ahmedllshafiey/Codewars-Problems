function nthSmallest() {
  let arr = [];
  let result = [];
  for (let i = 0; i < arguments.length; i++) {
    arr.push(arguments[i]);
  }
  for (let i = 0; i < arr.length; i++) {
    let element = arr[i];
    for (let k = 0; k < element.length; k++) {
      result.push(element[k]);
    }
  }
  result.sort(function (e1, e2) {
    return e1 - e2;
  });

  return result[arr.slice(-1)[0] - 1];
}
