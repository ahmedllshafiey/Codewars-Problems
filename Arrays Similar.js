function arraysSimilar(arr1, arr2) {
  arr1.sort();
  arr2.sort();

  for (let i = 0; i < arr1.length; i++) {
    for (let k = 0; k < arr2.length; k++) {
      if (arr1[i] !== arr2[k]) {
        return false;
      }else{
        i++
      }
    }
  }
  return true
}

console.log(arraysSimilar([1, 2, 2, 3, 4], [2, 1, 2, 4, 3]));
