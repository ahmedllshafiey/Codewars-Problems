function solution() {
  for (let i = 0; i < arguments.length; i++) {
    for (let k = i + 1; k < arguments.length; k++) {
      if (arguments[i] === arguments[k]) {
        return true;
      }
    }
  }
  return false;
}
