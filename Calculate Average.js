function findAverage(array) {
  if (array) {
    let total = 0;
    if (array.length > 0) {
      let sum = 0;
      for (i = 0; i < array.length; i++) {
        sum = sum + array[i];
      }

      total = sum / array.length;
    }
    return total;
  } else {
    return 0;
  }
}