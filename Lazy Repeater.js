function makeLooper(str) {
  let i = 0;

  return function () {
    if (i >= str.length) {
      i = 0;
    }
    const result = str[i];
    i++;
    return result;
  };
}
