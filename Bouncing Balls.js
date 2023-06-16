function bouncingBall(h, bounce, window) {
  if (h > 0 && 1 > bounce > 0 && window < h && bounce > 0) {
    let num = 0;
    while (window < h) {
      num++;
      h = h * bounce;
      if (h > window) {
        num++;
      }
    }
    return num;
  } else {
    return -1;
  }
}
