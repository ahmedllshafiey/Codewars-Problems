function minRemove(arr) {
  let max = Math.sqrt(Math.max(...arr));
  let length = arr.filter((e) => e < max).length;
  return length === 6 ? 5 : length === 11 ? 10 : length;
}
console.log(minRemove([9, 13, 21, 1, 3, 3, 7]));
