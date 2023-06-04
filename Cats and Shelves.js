function solution(start, finish) {
  let loc = start;
  for (let i = 0; i < finish; i++) {
    if (loc > finish) {
      loc = loc - 3 + 1;
      i = i - 1;
    } else if (loc === finish) {
      return i;
    } else {
      loc = loc + 3;
    }
  }
}
